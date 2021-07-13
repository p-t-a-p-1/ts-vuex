import Sass from 'sass'
import Fiber from 'fibers'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ts-vuex',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: '~/assets/scss/common.scss' }],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/axios-accessor'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      scss: {
        implementation: Sass,
        sassOptions: {
          fiber: Fiber,
        },
      },
    },
  },

  typescript: {
    typeCheck: {
      eslint: {
        files: './**/*.{ts,vue}',
      },
    },
  },

  storybook: {
    // 追加のアドオンなどあれば
    addons: ['@storybook/addon-controls', '@storybook/addon-notes'],
    // ポート指定
    port: 5555,
    // 背景色や表示位置、デバイスの設定など
    parameters: {
      // 背景色：デフォルトの色を使う場合
      backgrounds: {
        default: 'dark', // light or dark
      },
      // Description, Default, Controlsカラムの表示
      controls: {
        expanded: true,
      },
      // 表示位置
      layout: 'centered', // centered:中央表示, padded:コンポーネントに余白付与, fullscreen:幅いっぱい
    },
  },
}
