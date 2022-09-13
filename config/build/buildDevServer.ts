import {BuildOptions} from "./types/config";
import type {Configuration as DevServerConfiguration} from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): DevServerConfiguration{
  return {
    port: options.port,
    open: true,
    // option history-api-fallback on https://github.com/webpack/webpack-dev-server
    historyApiFallback: true,
}
}