var  webpack = require('webpack');
var htmlWebpackPlugin=require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path=require('path');
var glob = require('glob');
var entries = getEntry('./src/html/**/*.js'); // 获得入口js文件


/*var allcss=new ExtractTextPlugin('css/commons.css');*/
var allless=new ExtractTextPlugin('css/commons_less.css');
//使用注意设置环境变量 NODE_PATH 为npm root -g 的值
module.exports = {
  entry: entries,  //['./src/js/index.js','./src/js/set.js'] 打包多个js在一起  '{page1:['ss.js','./js/aa.js'],page2:'./js/com.js'} 多页应用，分开打包'
  output: {  //文件输出配置
    path:path.resolve(__dirname, './dist'),  //打包文件路径
    filename: 'js/[name].js',  //打包文件名称build.js 多页使用[name entry为对象时的属性名][hash 每次打包的编码][chunkhash 每个文件单独的编码].js
    publicPath:'/webpack多页打包/dist/'  //引用占位符 不设置的话默认为相对路径
  },
    module: {  //loader配置

          rules: [
              {
                  test: /\.vue$/,
                  use:[
                      "vue-loader"
                  ]
              },
              
              {
                  test: /\.html$/,
                  use: ['vue-html-loader']
              },
              {
                  test: /\.json$/,
                  use: ['json-loader']
              },

              {
                  test:/\.(png|jpe?g|gif)(\?.*)?$/,
                  use:['url-loader?limit=8000&name=images/[name].[ext]']
              },
              
          {
            test: /\.css$/,
            use:/*allcss.extract(['css-loader', 'postcss-loader' ])*/

                [
                 "style-loader",
                 "css-loader?importLoaders=1",
                 "postcss-loader"
            ]
          },
          {
            test: /\.js$/,
            exclude:path.resolve(__dirname, './node_modules'),
            use:[
                "babel-loader"
            ]
          },
              //字体
              {
                  test: /\.(ttf|eot|woff|svg)(\?.*)?$/,
                  use: [
                      'file-loader?limit=10000&name=fonts/[name].[ext]'
                  ]
              },
          {
            test: /\.less$/,
            use:allless.extract(['css-loader','less-loader', 'postcss-loader' ])
               /* [
                "style-loader",
                 "css-loader",
                 "less-loader",
                 "postcss-loader"
            ]*/
          }
        ]
  },
  plugins: [

      new webpack.LoaderOptionsPlugin({
        // test: /\.xxx$/, // may apply this only for some modules
        options: {
            vue: {
                loaders: {
                css: ExtractTextPlugin.extract("css-loader!postcss-loader"),
                // you can also include <style lang="less"> or other langauges
                less: ExtractTextPlugin.extract("css-loader!less-loader!postcss-loader")
            }
            },
            postcss:[
                require('autoprefixer')({
                    broswers:['last 5 versions']
                })
            ]
    }
}),
      new webpack.optimize.CommonsChunkPlugin({
          name: 'commons', // 这公共代码的chunk名为'commons'
          filename: './js/[name].bundle.js', // 生成后的文件名，虽说用了[name]，但实际上就是'commons.bundle.js'了
          minChunks: 2 // 设定要有4个chunk（即4个页面）加载的js模块才会被纳入公共代码。这数目自己考虑吧，我认为3-5比较合适。
      }),
      new webpack.DefinePlugin({
          'process.env': {
              NODE_ENV:'"production"'
          }
      }),
      new webpack.optimize.UglifyJsPlugin({
          comments: false,        //去掉注释
          compress: {
              warnings: false    //忽略警告,要不然会有一大堆的黄色字体出现……
          }
      }),
      // 配置提取出的样式文件
      allless,
     /* allcss,*/
      new ExtractTextPlugin('css/[name].css') //提取vue里面的css
     /* new ExtractTextPlugin('[name].[contenthash].css'),*/ //抽取css
/*      new CompressionWebpackPlugin({ //gzip 压缩
          asset: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp(
              '\\.(js|css)$'    //压缩 js 与 css
          ),
          threshold: 10240,
          minRatio: 0.8
      }),*/
/*    new htmlWebpackPlugin({  //页面a的配置
      filename:'html/index-[hash].html',   //打包后的文件名
      template:'./src/html/index/index.html', //要打包的文件
      inject:'body', //js插入的位置
      title:'填写index.html的title',
      chunks:['index','commons'], //指定加载的js循序和文件
    minify:{
        removeComments: true,        //去注释
        collapseWhitespace: true,    //压缩空格
        removeAttributeQuotes: true  //去除属性引用
    }
    })*/
  ]
};
function getEntry(globPath) {
    var entries = {},
        basename, tmp, pathname;

    glob.sync(globPath).forEach(function (entry) {
        basename = path.basename(entry, path.extname(entry));
        tmp = entry.split('/').splice(-3);
        pathname = tmp.splice(0, 1) + '/' + basename; // 正确输出js和html的路径
        entries[pathname] = entry;
    });

    return entries;
}
var pages = getEntry('./src/html/**/*.html');
for (var pathname in pages) {


    // 配置生成的html文件，定义路径等
    var conf = {
        filename: pathname + '.html',
        template: pages[pathname],   // 模板路径
        inject: true              // js插入位置

    };


    if (pathname in module.exports.entry) {
        conf.chunks = ['commons', pathname];
        conf.hash = true;
    }

    module.exports.plugins.push(new htmlWebpackPlugin(conf));
}