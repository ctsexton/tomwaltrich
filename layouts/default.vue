<template>
  <v-app dark>
    <navigation :items="items" />
    <v-content :class="bgColor" class="texture">
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
          { title: 'recordings', to: '/recordings' },
          { title: 'video', to: '/video' },
          { title: 'teaching', to: '/teaching' },
          { title: 'gigs', to: '/gigs' },
          { title: 'contact', to: '/contact' }
        ],
        title: 'Vuetify.js'
      }
    },
    computed: {
      bgColor: function () {
        const paths = {
          '/': 'cyan lighten-2',
          '/projects': 'pink lighten-3',
          '/recordings': 'yellow lighten-2',
          '/video': 'orange lighten-3',
          '/teaching': 'blue-grey lighten-2',
          '/gigs': 'brown lighten-2',
          '/contact': 'blue darken-4'
        }
        return paths[this.$route.path]
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
.bg {
  background: #a3d8c1;
}
.texture {
  background-color: #606969;
  background-image: url('~/squairy.png');
  background-repeat: repeat;
  background-attachment: scroll;
}
</style>
