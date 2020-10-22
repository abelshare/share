// 管理輸出

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, './src/index.js')
  },
  devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
		hot: true
	},
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ title: '开发环境' }),
    new ManifestPlugin(),
		new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
  },
};
