<template>
  <md-app class="container">
    <md-app-drawer
      v-if="$mq == 'lg'"
      md-permanent="full"
      :md-active.sync="menuVisible"
      class="bg-color-A md-size-5">
      <navigation :menuitems="menuitems" />
    </md-app-drawer>
    <md-app-drawer
      v-else
      :md-active.sync="menuVisible"
      class="bg-color-A md-size-5">
      <navigation :menuitems="menuitems" />
    </md-app-drawer>
    <md-app-content class="md-body-2 bg-color-C">
      <md-button 
        v-if="$mq != 'lg'"
        v-on:click="menuVisible = !menuVisible" 
        class="md-icon-button md-accent position-outside">
        <md-icon>menu</md-icon>
      </md-button>
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
      menuVisible: true,
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
  font-family: "Raleway", "sans-serif";
  height: 100vh;
}

.md-drawer {
  width: 300px;
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
.position-outside {
  position: absolute;
  top: 0;
  left: 0;
}
</style>

