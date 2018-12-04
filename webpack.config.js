const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const srcDir = resolve(__dirname, 'src')
const webpack = require('webpack')
// TODO: mini-css-extract-plugin쓰기

module.exports = {
  mode: 'development',
  entry: `${srcDir}/index.js`,
  output: {
    filename: 'bundle.js',
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
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '[name]-[local]-[hash:base64:6]', // 클레스 이름을 좀더 쉽게 보게함
          camelCase: true
        }
      }],
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

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.OptimizeCSSAssetsPlugin({})
  ])
}
