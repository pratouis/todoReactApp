var webpack = require('webpack');
// responsible for translating the ES6, so we won't be using ES6
// it is possible with extra configuration
module.exports = {
  // specifies where our app is living
  entry: './reactApp/app.js',

  // filename = name of file output by the build
  // path = absolute path where above file should go
  output: {
    // in the future use path package to resolve file paths
    path: __dirname + '/build',
    filename: 'app.bundle.js'
  },
  module: {
    // run all files ending in .js except those in node_modules
    rules: [
      {
        test: /\.js$/, // regular expression
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      }
    ]
  },
  // nice-to-have stats - makes webpack's output colorful
  stats: {
    colors: true
  },
  // nice-to-have devtool - turns on sourcemapping so line numbers
  // of input and output files match to aid me during debugging
  devtool: 'source-map'
}
