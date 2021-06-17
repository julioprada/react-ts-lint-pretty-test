const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

require('dotenv').config();

// eslint-disable-next-line no-undef
module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    // Enable webpack find ts and tsx files without an extension
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    modules: ['public', 'src', 'node_modules'],
    alias: {
      '@redux': path.join(__dirname, '/src/redux'),
    },
  },
  output: {
    filename: 'bundle.js',
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: `${path.join(__dirname, 'public')}/index.html`,
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [{ from: 'public/locales', to: 'locales' }],
    }),
  ],
};
