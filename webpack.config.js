/*
 * @Date: 2020-08-10 13:14:36
 * @FilePath: \webpack-demo\webpack.config.js
 * @file: 文件名称
 * @author: halin.guo
 * @description: 文件描述
 */
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpckPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/webpackTest.js",
  mode: "development",
  output: {
    publicPath:'/',
    filename: "dist.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer:{
    open:true,
    hot:true,  //开启热更新
    hotOnly:true
  },
  module: {
    //当去打包模块时的配置
    rules: [
      {
        test: /\.(png|jpg|svg)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name]_[hash].[ext]", // 打包出来的图片的名字和后缀跟定义的名字和后缀一样
            outputPath: "public/images", //打包输出的文件位置
            limit: 204, //大于200kb就会打包到public/images文件里，否则就以base64位的形式打包
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: "file-loader",
        },
      },
      {
        test: /\.(css|less)$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              // importLoaders:2,   // 当在js文件引入scss的样式文件，在样式文件又引入其他的样式文件时
              modules: true, // 模块化打包                // 该属性表示在第二个样式里面也要先执行下面2个loader（虽然没写，是scss-loader和postcss-loader）
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new CleanWebpckPlugin(["dist"]),
    new webpack.HotModuleReplacementPlugin()
  ],
};
