import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import path from "path";
import  webpack  from "webpack";
import { BuildOptions } from "./types/config";

export function buildPlugins(options:BuildOptions):webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: options.paths.html
          }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
    ]
}