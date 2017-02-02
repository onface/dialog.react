var path = require('path')
var webpack = require('webpack')
module.exports = require('./webpack.config')({
    entry: ["babel-polyfill", './example/dev'],
    devtool: 'source-map',
    externals: {},
    output: {
        path: path.join(__dirname, '../output'),
        filename: 'example/dev.js',
        publicPath: '/'
    }
})
