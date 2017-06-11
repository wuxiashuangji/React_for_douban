/**
 * Created by j on 2017/5/14.
 */
//1.初始化项目
//2.下载webpack包
//3.创建webpack.config.js文件
//4.写配置文件
//一般的项目文件目录src
//var path=require('path');


//webpack 常用命令
/*
-p 压缩
-w 监视
--progress 进度条
--color 颜色
--help 帮助
--config 设置配置文件 设置不同的配置文件
* */
//端口的使用1-65535  1-3000
/*
loader加载器 plugin插件
* */
//如果需要通过plugin插件压缩 引用webpack
//import  webpack from 'webpack'
var webpack=require('webpack');

//自动生成html文件
var htmlWebpackPlugin = require('html-webpack-plugin');

//引用css分离工具
var ExtractTextPlugin = require("extract-text-webpack-plugin");
//清除dist文件
var CleanWebpackPlugin = require('clean-webpack-plugin');
//eslint 的使用
//1 下载eslint npm install eslint eslint-loader
//2 创建eslint-loader加载器
//3. 创建.eslintrc.js文件 写eslint规则
//分离js 和css
module.exports={
     //入口
    entry:{
        bundle:__dirname+'/src/js/main.js',
       // vendor:['jquery']//放入共有的js //如果共有的是在node_modules中的模块直接写模块名，如果不是写js文件路径
    },
    //一个入口
   // entry:__dirname+'/src/js/main.js',
    //  entry:path.join(__dirname,'/src/js/main.js'),
    // entry:path.resolve(__dirname,'/src/js/main.js')
    //entry:__dirname+'/src/js/main.js',
    //出口
    output:{
        path:__dirname+'/dist',
        filename:'[name].js'
    },
    module:{
        //webpack 1的写法 loaders:
        //webpack 2的写法 rules
        rules:[
            //通过loader来处理css样式
            {
                test:/\.css$/,//匹配对应css
                //style-loader css-loader
                //webpack 1:loader:'style-loader!css-loader' || loader:'style!css'
                //webpack2的css加载
                //css-loader 将将样式加载到js中
                //style-loader 将js中的样式实现到html界面中来
                //loader加载器执行顺序是从右边到左边，webpack1和webpack2执行顺序都是一样的
                //未对css分离进行操作
                //use:['style-loader','css-loader']
                //对css进行分离操作
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            //图片的处理
            {
                test:/\.(jpg|png|jpeg|gif)$/,
                //base64编码格式的图片是用来减少三次握手的网络请求
                //对于大图片不要用base64处理
                //如果图片大小超过7kb就按照原样输出，如果小于就按照base64处理
                //如果需要原样输出还需要添加加载器file-loader
                //[name]指你的原名称
                //[ext] 指原来的类型
                use:['url-loader?limit=7000&name=[name].[ext]']
            },
            //babel es6->es5
            {
                //babel在使用的中需要 下载babel-loader babel-core
                //将原有es6->es5需要 npm install babel-preset-es2015
                //stage-0 到stage-3是对原有的es6语法拓展
                test:/\.js$/,
                exclude: /node_modules/, //不去处理node_modules文件
                //通过使用loader+query 是webpack1中使用的办法
                // loader:'babel-loader',
                // query:{
                //     "presets": ["es2015","stage-0","stage-1","stage-2","stage-3"]
                // }
                //webpack2 中参数的使用
                use:{
                    loader:'babel-loader',
                    options:{
                        //如果要使用react中的jsx语法需要将babel-preset-react 下载才能解析jsx语法
                        "presets": ["react","es2015","stage-0","stage-1","stage-2","stage-3"],
                        "plugins": [
                            ["import", { libraryName: "antd", style: "css" }] // `style: true` 会加载 less 文件
                        ]
                    }
                }
            }
        ]
    },
    plugins:[
        //通过UglifyJsPlugin将当前的代码进行压缩
        //webpack -p 的本质就是在webpack内部调用UglifyJsPlugin
        // new webpack.optimize.UglifyJsPlugin({
        //     compress:{
        //         warnings:false //取出警告
        //     }
        // }),
        //如果直接使用htmlWebpackPlugin 将会创建好文件，不会有原来的html内容
        new htmlWebpackPlugin({
            title: '测试', //在使用模板的情况下title无效
            filename:'./index.html', //生成的文件路径
            template:'./src/index.html', //模板的文件路径
            // minify:{
            //     collapseWhitespace:true, //删除空格
            //     removeComments:true //删除注释
            // }
        }),
        //webpack自带分离js工具
        //1. 修改入口entry
            //入口
            // entry:{
            //         bundle:__dirname+'/src/js/main.js',
            //             vendor:['jquery']//放入共有的js //如果共有的是在node_modules中的模块直接写模块名，如果不是写js文件路径
            //     },
        //2.修改出口
        //         output:{
        //         path:__dirname+'/dist',
        //             filename:'[name].js'
        //     },
        //3.使用webpack.optimize.CommonsChunkPlugin 将共有的js文件分离出来
        // new webpack.optimize.CommonsChunkPlugin({
        //     name:'vendor',
        //     filename:'vendor.js'
        // }),
        //webpack分离css样式
        new ExtractTextPlugin("[name].css"),
        //清除dist文件
        new CleanWebpackPlugin(['dist'])
    ]
};