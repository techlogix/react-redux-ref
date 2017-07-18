module.exports = {
  entry: {['./src/main.js','./src/components/\.js$/']},
  output: {
    filename: "./dist/scripts/bundle.js",
    sourceMapFilename: "./dist/scripts/bundle.map"
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