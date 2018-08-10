const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const utils = require('./config/utils');

const styleLoaders = utils.styleLoaders();

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        use: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      ...styleLoaders,
      {
        test: /\.(jpe?g|png|gif|bmp|svg)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    namedModules: true
  },
  devServer: {
    publicPath: '/',
    historyApiFallback: true,
    contentBase: './public',
    compress: true,
    watchContentBase: true,
    inline: true,
    hot: true,
    port: 8080,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  devtool: 'cheap-module-source-map',
  mode: 'development'
};
