const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: './lib/toast.ts',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      { test: /\.(sa|sc|c)ss$/i, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.ts$/, use: 'ts-loader', include: [path.resolve(__dirname, 'lib')] }
    ]
  },
  devServer: {
    port: 8080,
    contentBase: path.join(__dirname, 'example')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './example/index.html'
    })
  ]
};
