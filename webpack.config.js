const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const srcDir = resolve(__dirname, 'src')

module.exports = {
  mode: 'development',
  entry: `${srcDir}/index.js`,
  output: {
    filename: 'bundle.js'
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
      loader: 'css-loader',
      exclude: /node_moduels/
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${srcDir}/index.html`
    }),
    new DashboardPlugin()
  ]
}
