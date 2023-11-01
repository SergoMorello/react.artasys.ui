const path = require('path');

module.exports = {
  entry: {
	index: '/src/index.ts',
  },
  target: 'web',
  mode: 'production', //production | development
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
			'ts-loader'
		],
        exclude: /node_modules/,
      },
	  { test: /\.css$/, use: [
		'style-loader',
		'css-loader',
		{
			loader: 'postcss-loader',
			options: {
				postcssOptions: {
				  plugins: [
					[
					  "autoprefixer",
					  {
						// Options
					  },
					],
				  ],
				},
			}
		}
		] }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
	library: 'UI',
	libraryTarget: 'umd',
	chunkFilename: '[name].chunk.js',
	auxiliaryComment: 'Arta System UI'
  },
  externals: {
    react: {
       root: 'React',
       commonjs: 'react',
       commonjs2: 'react',
       amd: 'react',
    }
  }
};