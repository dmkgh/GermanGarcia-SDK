const path = require('path');

module.exports = {
  entry: './lib/lor-api-consumer.ts',
  output: {
    filename: 'LOR_SDK.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'LorConsumer',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
};
