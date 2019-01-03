const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const dev = require('../config/dev.js');

process.env.NODE_ENV="development";

module.exports = {
    mode: 'development',
    // entry: './src/index.js',
    entry: path.resolve(__dirname, "../src/index.js"),
    devServer: {
        contentBase: './dist',
        hot: true,
        historyApiFallback: {  // 单页应用必须配置，不然路由不生效
            disableDotRule: true
        },
        host:'localhost',
        port: 8000,
        ...dev.devServer
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'react+redux+webpack',
            template: path.resolve(__dirname, '../public/index.html'),
            inject: true
        }),
        new CleanWebpackPlugin(['dist']),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()   // 模块热替换
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        // test 属性，用于标识出应该被对应的 loader 进行转换的某个或某些文件。
        // use 属性，表示进行转换时，应该使用哪个 loader。
        rules: [
            {
                test: /\.(jsx|js)$/,
                use:[{
                    loader:"babel-loader",
                }],
                exclude:/node_modules/
            },
            {
                test: /\.(css|less)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
                
        ]
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, '../src'),
            assets: path.resolve(__dirname, '../src/assets'),
            utils: path.resolve(__dirname, '../src/utils'),
            pages: path.resolve(__dirname, '../src/pages'),
            components: path.resolve(__dirname, '../src/components')
        }
    }
};