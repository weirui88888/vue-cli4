'use strict'

const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const jsCdn = [
  'https://cdn.bootcss.com/vue/2.5.17/vue.runtime.min.js',
  'https://cdn.bootcss.com/vue-router/3.0.1/vue-router.min.js',
  'https://cdn.bootcss.com/vuex/3.0.1/vuex.min.js',
  'https://cdn.bootcss.com/axios/0.18.0/axios.min.js'
]

// productionSourceMap
// crossorigin
// configureWebpack
// chainWebpack修改loader，添加loader
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  chainWebpack: config => {
    // 配置别名
    config.resolve.alias.set('@', resolve('./src'))
    config.plugin('html').tap(args => {
      args[0].cdn = jsCdn
      args[0].title = '重新学习vue-cli'
      return args
    })
  },
  css: {
    loaderOptions: {
      // pass options to sass-loader
      scss: {
        // 引入全局变量样式,@使我们设置的别名,执行src目录
        additionalData: `
              @import "~@/styles/theme.scss";
          `
      }
    }
  }
}