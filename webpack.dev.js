const merge = require('webpack-merge');
const common = require('./webpack.common.js');

// eslint-disable-next-line no-undef
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true,
  },
});
