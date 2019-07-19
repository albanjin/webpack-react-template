

const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const webpack = require('webpack')


module.exports = webpackMerge(baseConfig,{
    mode: 'development',
    devServer: {
        host: '0.0.0.0',
        port: 9527,
        compress: true,
        hot: true,
        clientLogLevel: 'warning', //能隐藏热更替 控制台的进度
        historyApiFallback: true,
        overlay: {
            error: true
        }
    },
    devtool: '#cheap-module-eval-source-map',
    module:{
        
    },
    plugins:[
        new webpack.DefinePlugin({
            ROOTPATH: JSON.stringify('/ycd/app'),
            ENV: 'true'
        }),
        
    ]
})