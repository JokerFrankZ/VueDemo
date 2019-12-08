module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        common: '@/common',
        components: '@/components',
        network: '@/network',
        views: '@/views'
      }
    }
  },
  devServer: {
    //用于解决跨越问题，使用代理
    proxy: {
      '/api': {
        //使用"/api"来代替"http://f.apiplus.c"
        target: 'http://m.maoyan.com', //源地址
        changeOrigin: true, //改变源
        ws: true,
        pathRewrite: {
          '^/api': '' //路径重写
        }
      }
    }
  }
}
