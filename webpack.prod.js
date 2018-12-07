const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  context: resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    app: `./index.js`
  },
  output: {
    filename: '[name].[chunkhash:6].js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [{
      enforce: 'pre', // 로더 카테고리 설정 pre | post
      test: /\.js$/,
      loader: 'standard-loader',
      exclude: /node_modules/ // node_modules제외 하고 빌드
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract(['css-loader?modules,localIdentName="[name]-[local]-[hash:base64:6]",camelCase']),
      exclude: /node_moduels/
    }]
  },
  devtool: 'source-map',
  performance: {
    hints: 'error'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `./index.html`
    }),
    new UglifyJSPlugin(),
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin('styles.[chunkhash:6].css')
  ]
}
