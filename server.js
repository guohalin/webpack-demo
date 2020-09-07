/*
 * @Date: 2020-08-12 10:48:28
 * @FilePath: \webpack-demo\server.js
 * @file: 文件名称
 * @author: halin.guo
 * @description: 文件描述
 */
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config.js');
const complier = webpack(config);

const app = express();

app.use(webpackDevMiddleware(complier,{
    publicPath: config.output.publicPath
}))

app.listen(3000, () => {
    console.log('server is running');
})
