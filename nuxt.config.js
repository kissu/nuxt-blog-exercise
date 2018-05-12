const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Gaegu'},
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#00cec9' },

  /*
  ** Global CSS
  */
  css: [
    '~assets/styles/main.css',
    'element-ui/lib/theme-chalk/index.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/core-components.js',
    '~plugins/date-filter.js',
    '@/plugins/element-ui',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: process.env.BASE_URL || 'https://learn-nuxt-6a97b.firebaseio.com/',
    credentials: false,
  },


  env: {
    baseURL: process.env.BASE_URL || 'https://learn-nuxt-6a97b.firebaseio.com/',
    fbAPIKey: 'AIzaSyBNf7ps0lJPoKoOFRJBLEy15AZafdxQ_IM',
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    },
  },
  transition: {
    name: 'fade',
    mode: 'out-in',
  }
}
