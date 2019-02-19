const path = require('path');

module.exports = {
  mode: 'production',
  entry: ['./src/index.js'],
  output: {
    filename: 'index.js',
    path: path.resolve('dist'),
  },
  externals: {
    react: {          
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
  },
  stats: {
    children: false,
    colors: true,
    entrypoints: false,
    modules: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
    ],
  },
};