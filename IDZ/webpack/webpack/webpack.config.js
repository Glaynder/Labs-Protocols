const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
}

module.exports = config;