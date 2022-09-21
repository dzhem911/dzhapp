import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import svgrLoader from '@svgr/webpack';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  // Порядок при котором лоадеры возвращаются в массиве(use) - имеет значение,
  // поэтому лучше выносить отдельные лоадеры в переменные
  // Если не использовать typescript - нужен babel-loader
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node-modules/,
  };

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const sassLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            // функция для проверки файла модуль/нет.
            // В зависимости от исхода решает как обрабатывать
            // https://webpack.js.org/loaders/css-loader/#auto
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            // выбираем способ определения имени
            // https://webpack.js.org/loaders/css-loader/#localidentname
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  };

  return [
    typescriptLoader,
    sassLoader,
    fileLoader,
    svgLoader,
  ];
}
