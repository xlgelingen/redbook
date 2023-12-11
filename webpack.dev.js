const {merge} = require('webpack-merge');//注意大括号
const common = require('./webpack.config.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    hot: true,
    contentBase: './dist'
  }
});