const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')


// console.log( path.resolve('src'))

module.exports = {
    mode: 'production',
    entry: './src/index.js',

    output:{
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].[hash:8].js',
    },
    resolve: {
        extensions: ['.js', 'jsx', 'json', 'less', 'scss'],
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
                query: {
                    presets: ['react', 'es2015']
                }  
                //同时支持es6 react 或者下面的写法都可以  
            },
            {
                test: /\.css$/,
                loaders:['style-loader','css-loader']
            },
            {
                test: /\.scss$/,
                loaders:['style-loader','css-loader','sass-loader']
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
            hash: true
        }),
        new webpack.ProvidePlugin({
            React: 'react',
            Loadable : 'react-loadable'
        })
    ]
}