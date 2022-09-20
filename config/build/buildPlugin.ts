import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

// Простая функция возвращающая список плагинов
// webpack.WebpackPluginInstance - специальный тип для плагинов
export function buildPlugin({paths, isDev}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    // отвечает за генерацию index.html
    // template - используем html файл из папки public как шаблон
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    //
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    // с помощью definePlugin в само приложение можно прокидывать глобальные переменные
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    })
  ]
}