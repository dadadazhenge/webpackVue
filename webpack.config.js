const path=require('path');
const htmlWebpackPlugin=require('html-webpack-plugin')
const VueLoaderPlugin=require('vue-loader/lib/plugin')

//这里通过node中的模块化操作，向外暴露了一个配置对象
module.exports={
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    mode:'development',
    plugins:[
        new htmlWebpackPlugin({
            template: path.join(__dirname,'./src/index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin(),
    ],
    module:{
        rules:[
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            {test: /\.(png|jpg|gif|bmp|jgeg)$/, use: 'url-loader'},
            {test: /\.(ttf|eot|woff|woff2|svg)$/, use: 'url-loader'},
            {test: /\.js$/, use: 'babel-loader', exclude:/node_modules/},
            {test: /\.vue$/, use: 'vue-loader'},
        ]
    }
}