module.exports = {
  entry: './src/main.js',
  output: {
    filename: "./dist/bundle.js",
    sourceMapFilename: "./dist/bundle.map"
  },
  devtool: '#source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}