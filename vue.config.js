'use strict'

const path = require('path')

const isProduction = process.env.NODE_ENV === 'production'

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
  // 在每次保存时执行校验的选项是默认开启的
  productionSourceMap: false,
  lintOnSave: process.env.NODE_ENV !== 'production',
  publicPath: '/vue-cli4',
  configureWebpack: config => {
    if (isProduction) {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
    }
  },

  chainWebpack: config => {
    // 配置别名
    config.resolve.alias.set('@', resolve('./src'))
    config.plugin('html').tap(args => {
      args[0].cdn = jsCdn
      args[0].title = 'vue-cli'
      return args
    })

    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.exclude.add(/node_modules/)
    svgRule
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })

    const imagesRule = config.module.rule('images')
    imagesRule.exclude.add(resolve('src/icons'))
    config.module.rule('images').test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)

    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
  },
  css: {
    // 是否将组件中的css提取到一个独立的文件中，而不是动态注入到 JavaScript 中的 inline 代码,默认为true
    extract: true,
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
