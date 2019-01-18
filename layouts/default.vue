<template>
  <v-app dark>
    <navigation :items="items" />
    <v-content>
      <v-container fill-height>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import Navigation from '@/components/Navigation'
  export default {
    components: {
      Navigation
    },
    props: {
      menuItems: Object
    },
    data () {
      return {
        items: [
          { title: 'about', to: '/' },
          { title: 'projects', to: '/projects' },
          { title: 'video', to: '/video' },
          { title: 'teaching', to: '/teaching' },
          { title: 'gigs', to: '/gigs' },
          { title: 'contact', to: '/contact' }
        ],
        title: 'Vuetify.js'
      }
    }
  }
</script>
<style scoped>
.container .layout {
  height: 100%;
}
.xs6 {
  display: flex;
  flex-direction: column;
}
</style>
