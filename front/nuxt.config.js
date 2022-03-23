import * as FontAwesome from './assets/icon/fontawesome'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'BYOB - 전세계 모든 술이 한자리에',
    htmlAttrs: {
      lang: 'kr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'stylesheet', type: 'text/css', href: '@/assets/fonts/fonts.css' }
      // 한글 폰트 SpoqaHanSansNeo, 영어 폰트 Inter

    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    ['@nuxtjs/fontawesome',
      { component: 'fa', suffix: true }]
    // component 설정으로 이름 축약하여 사용 가능
  ],
  fontawesome: {
    icons: {
      solid: FontAwesome.solid,
      regular: FontAwesome.regular,
      brands: FontAwesome.brands
    }
  },
  styleResources: {
    scss: [
      '~/assets/scss/*.scss'
    ]
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
