const path = require('path');

module.exports = {
  entry: {
	index: '/src/index.ts'
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
	  {
		test: /\.(s[ac]ss|css)$/i, // Обрабатывает .css, .scss и .sass файлы
		oneOf: [
		  // CSS/SCSS модули
		  {
			test: /\.module\.(s[ac]ss|css)$/i, // Только модули
			use: [
			  'style-loader',
			  {
				loader: 'css-loader',
				options: {
				  modules: { // Включение CSS-модулей
					localIdentName: '[name]__[local]___[hash:base64:5]', // Уникальные имена классов
				  },
				},
			  },
			  'sass-loader', // Для .scss и .sass файлов
			  {
				loader: 'postcss-loader', // PostCSS (например, autoprefixer)
				options: {
				  postcssOptions: {
					plugins: [
					  ['autoprefixer', {}],
					],
				  },
				},
			  },
			],
		  },
		  // Обычные CSS/SCSS (не модули)
		  {
			use: [
			  'style-loader',
			  'css-loader', // Без модулей
			  'sass-loader', // Для .scss и .sass файлов
			  {
				loader: 'postcss-loader', // PostCSS (например, autoprefixer)
				options: {
				  postcssOptions: {
					plugins: [
					  ['autoprefixer', {}],
					],
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
		type: 'commonjs2',
	},
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