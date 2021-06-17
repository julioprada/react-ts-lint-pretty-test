const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');

// eslint-disable-next-line no-undef
module.exports = merge(common, {
  mode: 'production',
  devtool: 'none',
});
