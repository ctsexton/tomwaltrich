const apiAddress = process.env.DEPLOY_ENV === 'SERVER' ? {
  env: {
    cockpit: {
      apiUrl: 'http://thomaswaltrich-cms/api',
      apiToken: '9d4d784998060fba6ce3b6b3c9b617',
      baseUrl: 'http://thomaswaltrich-cms',
      realUrl: 'https://admin.thomaswaltrichmusic.com',
    }
  }
} : {
  env: {
    cockpit: {
      apiUrl: 'https://admin.thomaswaltrichmusic.com/api',
      apiToken: '9d4d784998060fba6ce3b6b3c9b617',
      baseUrl: 'https://admin.thomaswaltrichmusic.com',
      realUrl: 'https://admin.thomaswaltrichmusic.com',
    }
  }
}
module.exports = {
  ...apiAddress,
  /*
  ** Headers of the page
  */
  head: {
    title: 'Thomas Waltrich Music',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js + Vuetify.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Maven+Pro:400,700' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css' }
    ]
  },
  plugins: ['~/plugins/vuetify.js'],
  css: ['~/assets/style/app.styl'],
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    proxyHeaders: false,
    credentials: false
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
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
