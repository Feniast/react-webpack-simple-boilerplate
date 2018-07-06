const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const utils = require('./config/utils');

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';
const styleLoaders = utils.styleLoaders();

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:8].js',
    publicPath: '/'
  },
  module: {
    rules: [
      { 
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/,
        use: 'babel-loader' 
      },
      ...styleLoaders,
      {
        test: /\.(jpe?g|png|gif)/,
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
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
      filename: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  devtool: shouldUseSourceMap ? 'source-map' : false,
  mode: 'production'
}