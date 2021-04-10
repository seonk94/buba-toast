const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const developmentConfig = {
  mode: 'development',
  entry: ['@babel/polyfill', './src/index.ts'],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/public',
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      { test: /\.(sa|sc|c)ss$/i, use: ['style-loader', 'css-loader', 'sass-loader'] },
      // { test: /\.ts$/, use: 'ts-loader', include: [path.resolve(__dirname, 'lib')] }
      { test: /\.(ts|js)$/, use: 'babel-loader', exclude: /node_modules/, },
      { test: /\.(svg|png)$/, loader: 'file-loader' },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: false
    })
  ]
};

const productionConfig = {
  mode: 'production',
  entry: ['@babel/polyfill', './lib/index.ts'],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      { test: /\.(sa|sc|c)ss$/i, use: ['style-loader', 'css-loader', 'sass-loader'] },
      // { test: /\.ts$/, use: 'ts-loader', include: [path.resolve(__dirname, 'lib')] }
      { test: /\.(ts|js)$/, use: 'babel-loader', exclude: /node_modules/, },
      { test: /\.(svg|png)$/, loader: 'file-loader' },
    ]
  },
};

module.exports = (env, argv) => {
  if (argv.mode === "development") {
    return developmentConfig;
  }
  if (argv.mode === "production") {
    return productionConfig;
  }
}