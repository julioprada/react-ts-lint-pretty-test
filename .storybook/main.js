const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@redux': path.join(__dirname, '../src/redux'),
    };
    config.resolve.extensions.push('.ts', '.tsx', 'jsx', 'js');
    config.plugins.push(
      new CopyPlugin({
        patterns: [{ from: 'public/locales', to: 'locales' }],
      }),
    );
    return config;
  },
};
