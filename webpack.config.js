const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
  },
  resolve: {
      extensions: ['.js', '.jsx', '.ico'],
  },
  module: {
      rules: [{
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                  loader: 'babel-loader'
              }
          },
          {
              test: /\.html$/,
              use: [{
                  loader: 'html-loader'
              }]
          }
      ]
  },
  plugins: [
      new HtmlWebPackPlugin({
          template: './public/index.html',
          filename: './index.html',
          favicon: './public/favicon.ico'
      }),
  ]
};