const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: {
		index: path.resolve(__dirname, 'src/index.ts'),
	},

	target: ['web', 'es2020'],
	mode: 'production',
	devtool: 'source-map',

	module: {
		rules: [
			// TS / TSX
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},

			// CSS / SCSS Modules
			{
				test: /\.(s[ac]ss|css)$/i,
				oneOf: [
					// ✅ CSS Modules
					{
						test: /\.module\.(s[ac]ss|css)$/i,
						use: [
							MiniCssExtractPlugin.loader,
							{
							loader: 'css-loader',
							options: {
								modules: {
									localIdentName: '[name]__[local]___[hash:base64:5]',
								},
							},
							},
							'sass-loader',
							{
							loader: 'postcss-loader',
							options: {
								postcssOptions: {
									plugins: [['autoprefixer', {}]],
								},
							},
							},
						],
					},

					// Обычный CSS / SCSS (brands.css, reset.css и т.п.)
					{
						use: [
							MiniCssExtractPlugin.loader,
							'css-loader',          // ← ВАЖНО: без modules
							'sass-loader',
							{
							loader: 'postcss-loader',
							options: {
								postcssOptions: {
									plugins: [['autoprefixer', {}]],
								},
							},
							},
						],
					},
				],
			},
    	],
  	},

	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},

	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		library: {
		type: 'module',
		},
		clean: true,
		auxiliaryComment: 'Arta System UI'
	},

	experiments: {
		outputModule: true,
	},

	externals: {
		react: 'react',
		'react-dom': 'react-dom',
	},

	plugins: [
		new MiniCssExtractPlugin({
		filename: 'styles.css',
		}),
	],
};
