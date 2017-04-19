# morepagecli
webpack2.0+vue 的多页开发环境打包言简意赅<br>
//默认ui框架为mint-ui ------  http://mint-ui.github.io/docs/#!/zh-cn2<br>

//本项目为 vue 多页面自动构建打包配置+开发环境  //更多功能敬请期待 //作者很菜qq:534111616 wx:b83287403<br>
//打包指令 npm run build<br>
// 虚拟运行指令 npm run dev<br>
// publicPath 配置资源绝对路径 必定要设置为根目录 比如 项目在 c盘下的 test文件里
    那么设置为 publicPath：'/test/webpack多页打包/list' 打包上线时改为线上绝对路径即可如:www.zaicd.com/public/webpack多页打包/list
                          // 在config.js 引用 公共 框架 或者库<br>
// 在 每个 html文件里面的js文件引用私有的库<br>
// 自行配置 url-loader limit 比如 limit=8000 表示转义8kb以下图片为bst64编码<br>
// npm install 后直 npm run dev 即可运行项目
// <h3>2017/4/19 更新内容</h3> 
<p>1优化打包资源减小体积 </p>
<p>2 优化webpack-dev-server插件新增域名解析便于 手机浏览</p>
<p>3 添加 默认ui框架</p>
