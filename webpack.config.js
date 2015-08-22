const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      'webpack/hot/dev-server',
      './src/index.js'
    ]
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  debug: true,
  devtool: 'source-map',
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel',
        query: {
          optional: ['runtime']
        }
      },
      {
        test: /\.jsx$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src/components')
      },
      {
        test: /\.less$/,
        loader: 'style!css?sourceMap!less?sourceMap=true'
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};
