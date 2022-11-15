import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildPlugin } from './buildPlugin';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

// Тип webpack.Configuration нужен для того чтобы пользоваться всеми прелестями автокомплита
export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const {
    paths, mode, isDev,
  } = options;

  return {
    mode,
    entry: paths.entry,
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
    // куда и как делаем сборку приложения
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      // подчищает за собой старые сборки
      clean: true,
      publicPath: '/',
    },
    plugins: buildPlugin(options),
    module: {
      // в rules конфигурируем лоадеры.
      // Предназначены для обработки файлов которые выходят за рамки javascript
      rules: buildLoaders(options),
    },
    // в поле extensions укзываются расширения файлов
    // для которых при импорте не нужно указывать расширение
    resolve: buildResolvers(options),
  };
}
