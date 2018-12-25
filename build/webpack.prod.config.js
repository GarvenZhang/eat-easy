const base = require('./webpack.base.config');
const webpack = require('webpack');
const merge = require('webpack-merge');
// const WebpackParallelUglifyPlugin = require("webpack-parallel-uglify-plugin")

module.exports = merge(base, {
    mode: 'production',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        // new WebpackParallelUglifyPlugin({
        //     // 传递给uglifyJS的参数
        //     uglifyJS: {
        //         output: {
        //             // 最紧凑的输出
        //             beautify: true,
        //             // 删除所有的注释
        //             comments: false
        //         },
        //         compress: {
        //             // 在UglifyJs删除没有用到的代码时不输出警告
        //             warnings: false,
        //             // 删除所有的console.log语句
        //             drop_console: true,
        //             // 内嵌定义了但是只用到一次的变量
        //             collapse_vars: true,
        //             // 提取出出现多次但是没有定义成变量去引用的静态值
        //             reduce_vars: true
        //         }
        //     },
        //     exclude: /node_modules/
        // }),
    ]
});
