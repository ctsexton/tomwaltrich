const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/tomwaltrich/'
  }
} : {}

module.exports = {
  /*
  ** Headers of the page
  */
  ...routerBase,
  mode: 'universal',
  head: {
    title: 'tomwaltrich',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,700,400italic|Material+Icons' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Raleway:200,300,400,500,700' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
   ** Environment Vars
   */
  env: {
    cockpit: {
      apiUrl: 'https://tom.camsexton.com/api',
      apiToken: '9d4d784998060fba6ce3b6b3c9b617',
      baseUrl: 'https://tom.camsexton.com/'
    }
  },
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    proxyHeaders: false,
    credentials: false
  },
  css: [
    { src: 'vue-material/dist/vue-material.min.css', lang: 'css' },
    { src: '~/assets/theme.scss', lang: 'scss' } // include vue-material theme engine
  ],
  plugins: [
    { src: '~/plugins/vue-material' }
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

