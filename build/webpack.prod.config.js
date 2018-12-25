const base = require('./webpack.base.config');
const webpack = require('webpack');
const merge = require('webpack-merge');


module.exports = merge(base, {
    mode: 'production',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
});
