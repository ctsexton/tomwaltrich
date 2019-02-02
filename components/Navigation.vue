<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      :class="bgColor"
      width="240"
      app
      >
      <v-layout column fill-height justify-space-between align-content-space-between>
        <v-flex>
          <div class="headline center pa-2">
            thomas waltrich
          </div>
          <nuxt-link to="/">
            <v-img src="/cat_white.svg" class="ma-3" />
          </nuxt-link>
          <v-list>
            <v-list-tile
              router
              :to="item.to"
              :key="i"
              v-for="(item, i) in items"
              exact
            >
              <v-list-tile-content>
                <v-list-tile-title class="title white--text" v-text="item.title"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>
        <div class="pa-1">
          <v-btn icon flat :href="config.instagram" color="white">
            <v-icon x-large>fab fa-instagram</v-icon>
          </v-btn>
        </div>
      </v-layout>
    </v-navigation-drawer>
    <v-toolbar flat fixed class="transparent">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
  </div>
</template>
<script>
export default {
  props: {
    items: Array
  },
  data () {
    return {
      drawer: null
    }
  },
  computed: {
    config () { return this.$store.state.generalConfig },
    bgColor () {
      const paths = {
        '/': 'indigo accent-3',
        '/about': 'blue-grey darken-3',
        '/projects': 'orange accent-4',
        '/recordings': 'light-green',
        '/video': 'pink accent-2',
        '/teaching': 'yellow darken-2',
        '/gigs': 'deep-orange accent-3',
        '/contact': 'grey darken-4'
      }
      return paths[this.$route.path]
    }
  }
}
</script>
