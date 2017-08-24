var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: __dirname + '/app/main.js',
  output: {
    path: __dirname+'/build' ,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),  //以build为根目录提供文件
    historyApiFallback: true,
    hot: true,
    port:8092,
    inline: true,
    // api 代理转发
    proxy:{
        "/api": {
            target: "http://api.douban.com/v2/",
            pathRewrite: {"^/api" : ""},
            changeOrigin: true
        }
    }
  },
  devtool: 'source-map',
  resolve: {
      modules: [
          path.join(__dirname, "app"),
          "node_modules"
      ],
     extensions: ['.js', '.json', '.css', '.scss']
  },
  module: {
    loaders: [
       {test:/\.css$/, loader: 'style-loader!css-loader'},
       {
           test: /\.html?$/,
           loader: 'html-loader',
       },
       {test:/\.(png|jpe?g|gif|svg)(\?.*)?$/, loader: 'url-loader?limit=8192'},
       {test:/\.js$/, loader: 'react-hot-loader!babel-loader', exclude: /node_modules/},
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      // 项目中模板index.html的路径
      template: __dirname + "/index.html"
  }),
  new webpack.HotModuleReplacementPlugin()
  ]
};
