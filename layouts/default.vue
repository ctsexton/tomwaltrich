<template>
  <md-app class="container">
    <md-app-drawer md-permanent="full" :md-active.sync="menuVisible" class="bg-color-A">
      <navigation :menuitems="menuitems" />
    </md-app-drawer>
    <!--
    <md-app-toolbar class="">
      <md-button class="md-icon-button md-xsmall-show" @click="menuVisible = !menuVisible">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-display-2 capitalize">{{ currentPage }}</span>
    </md-app-toolbar>
    -->
    <md-app-content class="md-body-2 bg-color-C">
      <nuxt />
    </md-app-content>
  </md-app>
</template>
<script>
import Navigation from '@/components/Navigation.vue'
import Toolbar from '@/components/Toolbar.vue'
export default {
  components: {
    Navigation,
    Toolbar,
  },
  data () {
    return {
      menuVisible: false,
    }
  },
  computed: {
    menuitems () { return this.$store.state.menuitems },
    currentPage () { return this.$store.state.currentPage }
  }
}
</script>

<style lang="scss" scoped>
html {
  font-family: "Raleway", "sans-serif";
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
@import "~vue-material/src/components/MdLayout/mixins.scss";
.container {
  min-height: 100vh;
  font-family: "Raleway", "sans-serif";
}

.md-xsmall-show {
  display: none;
  @include md-layout-xsmall {
    display: inline-block;
  }
}
.capitalize {
  text-transform: capitalize;
}
</style>

