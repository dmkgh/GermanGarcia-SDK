const path = require('path');

module.exports = {
  entry: './lor-api-consumer.js',
  output: {
    filename: 'lor-api-consumer.ts',
    path: path.resolve(__dirname, 'dist'),
    library: 'liblabtesttypescrypt',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
};
