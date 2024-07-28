const path = require('node:path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts', // Входная точка вашего приложения
  resolve: {
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
  }, // Указывает расширения файлов, которые нужно обрабатывать
  output: {
    path: path.resolve(__dirname, 'dist'), // Путь к выходной директории
  },
  module: {
    rules: [
      {
        test: /\.(?:js|ts)$/, // Обрабатывает файлы с расширением .ts
        exclude: /node_modules/, // Исключает папку node_modules
        use: {
          loader: 'babel-loader', // Использует ts-loader для компиляции
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      }
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    })
  ],
};
