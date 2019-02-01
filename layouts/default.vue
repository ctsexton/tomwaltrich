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
          { title: 'about', to: '/about' },
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
          '/': 'indigo darken-4',
          '/about': 'blue-grey darken-2',
          '/projects': 'orange darken-5',
          '/recordings': 'green darken-4',
          '/video': 'pink darken-4',
          '/teaching': 'yellow accent-3',
          '/gigs': 'red accent-2',
          '/contact': 'grey lighten-1'
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
  position: relative;
}
</style>
