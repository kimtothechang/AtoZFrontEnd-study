// 자동으로 output 경로 찾아준다? process.cwd()
const path = require('path/posix');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.css$/i, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(png|jpg|jpeg|gif)$/i, use: ['file-loader'] },
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, 'src/js')],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { useBuiltIns: 'usage', corejs: 3 }]],
          },
        },
      },
    ],
  },
  mode: 'production',
  plugins: [
    new HTMLWebpackPlugin({ template: 'index.html', filename: 'index.html' }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({ extractComments: false })],
  },
  devServer: {
    static: {
      publicPath: '/',
      directory: path.join(__dirname, 'hoho'),
      // publicPath: 'hoho',
    },
    port: 3333,
  },
};
