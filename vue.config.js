const path = require('path');
const resolve = (dir) => path.join(__dirname, dir);
module.exports = {
    publicPath: '/myblog', //打包路径，使用相对路径生成的dist文件夹下的index可以打开
    // 输出文件目录
    outputDir: 'dist',
    //取消生成map文件
    productionSourceMap: false,
    // webpack-dev-server 相关配置
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        open: true, //配置自动启动浏览器
        https: false,
        hotOnly: false,
        proxy: null, // 设置代理
        before: app => {
            console.log(app)
        }
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            // .set('common', resolve('src/common'))
            // .set('utils', resolve('src/utils'))
    },
    css: {
        loaderOptions: {
            less: {
                // 若使用 less-loader@5，请移除 lessOptions 这一级，直接配置选项。
                lessOptions: {
                    modifyVars: {
                        // 直接覆盖变量
                        'text-color': '#111',
                        'border-color': '#eee',
                        // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
                        // hack: `true; @import "@/assets/style/swiper.less";`,
                    },
                },
            },
        },
    },
}