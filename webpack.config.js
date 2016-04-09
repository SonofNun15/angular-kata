module.exports = {
	entry: './built/app.module.js',
	output: {
		path: __dirname + '/output',
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
}