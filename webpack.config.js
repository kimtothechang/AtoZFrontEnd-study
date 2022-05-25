// 자동으로 output 경로 찾아준다? process.cwd()
const path = require('path/posix');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('./dist'),
    filename: '[name].[contenthash].js',
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(png|jpg|jpeg|gif)$/i, use: ['file-loader'] },
    ],
  },
  mode: 'production',
};

// ES6
// import { resolve } from 'path/posix';

// export const entry = './src/index.js';
// export const output = {
//   path: resolve(process.cwd(), 'dist'),
//   filename: '[name].[contenthash].js',
// };
