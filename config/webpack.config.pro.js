
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')



module.exports = webpackMerge(baseConfig,{
    mode: 'production',
    
    devtool: '#source-map',
    optimization: {

        splitChunks: {
            automaticNameDelimiter: 'jin',
            chunks: 'all'
        },
        // runtimeChunk:true
    },
    module:{
        
    },
    plugins:[
        // new CleanWebpackPlugin(
        //     ['/static'], {
        //         root: path.resolve(__dirname, '../'),
        //         verbose: true,
        //         dry: false
        //     }
        // ),
        new webpack.DefinePlugin({
            ROOTPATH: JSON.stringify('/ycd/app'),
            ENV: 'true'
        }),
        new webpack.BannerPlugin(`@license Company: NZJR        
        @license Author: albanjin
        (c) ${new Date().getFullYear()}-${(new Date().getMonth() / 1 + 1).toString().padStart(2,'0')}-${new Date().getDate()}`)
    ]
})