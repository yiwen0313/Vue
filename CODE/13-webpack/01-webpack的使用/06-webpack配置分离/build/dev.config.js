const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');


module.exports = webpackMerge(baseConfig, {
  devServer: {
    contentBase: './dist',
    // 页面实时刷新
    inline: true
  }
})