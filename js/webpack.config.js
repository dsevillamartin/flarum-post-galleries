const { merge } = require('webpack-merge');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const config = require('flarum-webpack-config');
const path = require('path');

module.exports = merge(config(), {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
});
