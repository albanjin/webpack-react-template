const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    // mode: 'production',
    entry: {
        polyfill:'babel-polyfill',
        index:'./src/index.js'
    },

    output:{
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].[hash:8].js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.less', '.scss'],
        alias: {
            '@': path.resolve('src'),
        }
    },
    module:{
        rules:[
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                // query: {
                //     presets: ['react', 'es2015'],
                //     plugins: [
                //         "dynamic-import-webpack"
                //     ]
                // }  
                //同时支持es6 react 或者下面的写法都可以  
            },
            {
                test: /\.css$/,
                loaders:['style-loader',MiniCssExtractPlugin.loader,'css-loader']
            },
            {
                test: /\.scss$/,
                use:['style-loader',MiniCssExtractPlugin.loader,'css-loader',{
                    loader: 'px2rem-loader',
                    // options here
                    options: {
                      remUni: 75,
                      remPrecision: 8
                    }
                  },'sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000, // 超过10000 的是使用file-loader 产生一个真实图片地址
                    name: 'images/[name].[hash:7].[ext]'
                }
            },

        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title:'jin',
            template:'index.html',
            filename:'index.html',
            hash: true,
            minify: {
                collapseWhitespace: true, //把生成的 index.html 文件的内容的没用空格去掉，减少空间
            }
        }),
        new webpack.ProvidePlugin({
            React: 'react',
            Loadable : 'react-loadable'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/style.css'
        })
    ]
}