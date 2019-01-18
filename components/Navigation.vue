<template>
  <v-navigation-drawer
    :mini-variant.sync="miniVariant"
    :clipped="clipped"
    v-model="drawer"
    fill-height
    fixed
    app
  >
    <v-layout column fill-height justify-space-between align-content-space-between>
      <v-flex>
        <v-toolbar flat dark color="secondary">
          <v-list>
            <v-list-tile>
              <v-list-tile-title class="headline font-weight-bold custom-font">
                thomas waltrich
              </v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-toolbar>
        <v-layout justify-center>
          <v-flex>
            <div class="text-xs-center">
              <img src="/cat_white.svg" width="65%" />
            </div>
          </v-flex>
        </v-layout>
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
</template>
<script>
export default {
  props: {
    items: Array
  },
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      miniVariant: false
    }
  },
  computed: {
    config () { return this.$store.state.generalConfig }
  }
}
</script>
