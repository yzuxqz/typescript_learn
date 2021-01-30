//引入包
const path = require('path')
//引入html插件
const HTMLWebpackPlugin =require('html-webpack-plugin')
//引入clean插件
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

//webapck中所有的配置信息
module.exports= {
  // 指定入口文件
  entry: "./src/index.ts",

  //指定打包文件所在的目录
  output: {
    //指定打包的文件目录
    path: path.resolve(__dirname, 'dist'),
    //打包后的文件名
    filename: "bundle.js",
  },

  //指定webpack打包时要使用的模块
  module: {
    //指定要加载的规则
    rules: [
      {
        //test指定规则生效的文件
        test: /\.ts$/,
        //要使用的loader,ts-loader把ts代码转换成js
        use: [
          //配置babel,因为比较复杂，所以用对象的形式
          {
            //指定加载器
            loader:'babel-loader',
            //设置babel
            options: {
              //设置预定义的环境
              presets:[
                [
                  //指定环境的插件
                  "@babel/preset-env",
                  //配置信息,对应的版本
                  {
                    //要兼容的目标浏览器
                    targets:{
                      "chrome":"88",
                      "ie":"11"
                    },
                    //指定corejs的版本
                    "corejs":"3",
                    //使用corejs的方式”useage“表示按需加载，corejs主要是让我们的代码兼容老的浏览器
                    "useBuiltIns":"usage"
                  }
                ]
              ]
            }
          },
          'ts-loader'
        ],
        //要排除的文件
        exclude: /node_modules/
      }
    ],
  },

  //配置webpack插件
  plugins: [
    new HTMLWebpackPlugin({
      // title:'这是一个自定义的title',
      //自定义网页模板
      template: "./src/index.html"
    }),
    new CleanWebpackPlugin()
  ],

  //用来设置引用模块
  resolve: {
    extensions: ['.ts','.js']
  }
}
