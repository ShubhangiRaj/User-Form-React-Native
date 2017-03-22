const webpack = require('webpack');

module.exports = {
  entry: {
    main: './index.web.js',
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
		    loader: "babel-loader",
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015','stage-0', 'react', 'react-native'],
        },
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            query: {
              progressive: true,
              optimizationLevel: 7,
              interlaced: false,
              pngquant: {
                quality: '65-90',
                speed: 4
              }
            }
          }
        ]
      }
    ],
  },
  resolve: {
    alias: {
      'react-native': 'react-native-web',
    },
  },
};