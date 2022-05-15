const { defineConfig } = require('@vue/cli-service')

const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy:{
      '/api':{
        target: 'http://localhost:8089',
        pathRewrite: {
          '^/api':'',
          changeOrigin: true
        }
      }
    },
    port: 8083
  },
  // chainWebpack: config => {
  //   // 处理ts文件 (新增loader)
  //   config.module.rule('ts').use('te-loader').end()
  // }
})
