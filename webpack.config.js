const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: ['@babel/polyfill', './lib/index.ts'],
  output: {
    filename: 'toast.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      { test: /\.(sa|sc|c)ss$/i, use: ['style-loader', 'css-loader', 'sass-loader'] },
      // { test: /\.ts$/, use: 'ts-loader', include: [path.resolve(__dirname, 'lib')] }
      { test: /\.(ts|js)$/, use: 'babel-loader', exclude: /node_modules/, }
    ]
  },
  devServer: {
    port: 8080,
    contentBase: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './dist/index.html'
    })
  ]
};