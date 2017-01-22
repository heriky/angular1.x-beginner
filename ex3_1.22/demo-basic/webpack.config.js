var path = require('path');
var webpack = require('webpack') ;
var HTMLPlugin = require('html-webpack-plugin');
var APP_PATH = path.resolve(__dirname, './src');

module.exports = {
	name: 'testDemo',
	target: 'web',
	entry: path.resolve(APP_PATH, "./index.js"),
	output: {
		path: APP_PATH,
		filename: 'bundle.js'
	},
	devtool: 'eval-source-map',
	plugins: [],
	resolve:{
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [{
			test: /\.js?$/,
			loader: 'babel-loader',
			include: APP_PATH
		},{
			test: /\.html$/,
			loader: 'raw-loader',
			exclude: /node_modules/
		},{
				test: /\.css$/,
				loaders: ['style', 'css'],
				exclude: /(node_modules|bower_components)/
			}]
	}
}