var webpack = require('webpack')

module.exports = {
	entry: './built/app.module.js',
	output: {
		path: __dirname + '/built',
		filename: 'app-bundle.js',
	},
	module: {
		loaders: [
			{
				test: /\.html$/,
				loader: 'text',
			},
		],
	},
	externals: [
		{
			angular: 'angular',
		},
	],
	plugins: [
		new webpack.optimize.UglifyJsPlugin(),
	],
}
