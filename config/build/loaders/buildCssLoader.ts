import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildCssLoader(isDev: boolean) {
  return {
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
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  };
}
