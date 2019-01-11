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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  env: {
    cockpit: {
      apiUrl: 'http://tom.camsexton.com/api',
      apiToken: '571bb3593a2cfb917e8a7f37ce2036',
      baseUrl: 'http://tom.camsexton.com/'
    }
  },
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    proxyHeaders: false,
    credentials: false
  },
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

