const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: true,
  // 配置反向代理，解决跨域问题
  devServer: {
    proxy: {
      '/api': { // 代理以/api开头的请求
        target: 'https://i.maoyan.com',
        changeOrigin: true
      },
      '/api/own': { // 代理以/api开头的请求
        target: 'https://i.maoyan.com',
        changeOrigin: true,
        pathRewrite: {
          '^/own': '' // 将以/own开头的请求替换掉
        }
      }
    }
  },
  // 设置别名信息
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        components: '@/components',
        router: '@/router',
        views: '@/views'
      }
    }
  }
})
