const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';

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
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            // set custom postcss plugin options here
            /*
            options: {
              config: {
                ctx: {
                  cssnext: {},
                  cssnano: {},
                  autoprefixer: {}
                }
              }
            } */
          }
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 2 } },
          'postcss-loader',
          'sass-loader'
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
    })
  ],
  devtool: shouldUseSourceMap ? 'source-map' : false,
  mode: 'production'
}