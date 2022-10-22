import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

// Простая функция возвращающая список плагинов
// webpack.WebpackPluginInstance - специальный тип для плагинов
export function buildPlugin({ paths, isDev, apiUrl }: BuildOptions): webpack.WebpackPluginInstance[] {
  const plugins = [
    // отвечает за генерацию index.html
    // template - используем html файл из папки public как шаблон
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    //
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    // с помощью definePlugin в само приложение можно прокидывать глобальные переменные
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl),
    }),
  ];

  if (isDev) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
    plugins.push(new BundleAnalyzerPlugin({
      openAnalyzer: false,
      // overlay: false,
    }));
  }

  return plugins;
}
