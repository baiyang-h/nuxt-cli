// https://nuxt.com/docs/api/configuration/nuxt-config

/**
 * process.env中有相关启动后的一些信息，比如：
 *  - process.env.NODE_ENV 什么环境，比如开发环境，默认为 development
 *  - process.env.NUXT_DOMAIN 比如这个为.env.xx 中配置的环境变量
 */
export default defineNuxtConfig({
  devtools: { enabled: true },
  // 引入css文件
  css: [
    '~/assets/font/iconfont.css'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        // 全局可以使用index.scss中的样式
        scss: {
          additionalData: '@use "~/assets/styles/index.scss" as *;'
        }
      }
    }
  }
})
