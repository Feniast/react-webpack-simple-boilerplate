const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isDev = process.env.NODE_ENV === 'development';

function styleLoaders(options) {
  options = options || {};
  const loaders = [{
      test: /\.css$/,
      use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: Object.assign({}, options['css-loader'], {
            importLoaders: 1
          })
        },
        {
          loader: 'postcss-loader',
          options: Object.assign({}, options['postcss-loader'])
        }
      ]
    },
    {
      test: /\.(scss|sass)$/,
      use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: Object.assign({}, options['css-loader'], {
            importLoaders: 2
          })
        },
        {
          loader: 'postcss-loader',
          options: Object.assign({}, options['postcss-loader'])
        },
        'sass-loader'
      ]
    }
  ];
  return loaders;
}

module.exports = {
  styleLoaders
};