<template>
  <div>
    <md-list class="bg-color-A">
      <md-list-item>
        <md-app-toolbar class="md-transparent nopadding" md-elevation="0">
          <span class="md-headline bold md-primary">thomas waltrich</span>
        </md-app-toolbar>
      </md-list-item>
      <div v-for="item in menuitems" :key="item.name" class="md-accent">
        <nuxt-link :to="item.link">
          <md-list-item 
            v-if="item.submenu.length > 0"
            md-expand
            :md-ripple="false"
            :md-expanded.sync="submenus[item.name]"
            v-on:click="doNothing">
            <span class="md-list-item-text md-headline nounderline">{{ item.name }}</span>
            <md-list slot="md-expand">
              <md-list-item class="md-inset md-headline" v-for="subitem in item.submenu" :key="subitem.title">
                {{ subitem.title }}
              </md-list-item>
            </md-list>
          </md-list-item>
        </nuxt-link>

        <nuxt-link :to="item.link">
          <md-list-item 
            v-if="item.submenu.length == 0"
            :md-ripple="false"
            v-on:click="changePage(item.name)">
            <span class="md-list-item-text md-headline nounderline">{{ item.name }}</span>
          </md-list-item>
        </nuxt-link>
      </div>
    </md-list>
  </div>
</template>
<script>
function objectMap(object, mapFn) {
  return Object.keys(object).reduce(function(result, key) {
    result[key] = mapFn(object[key])
    return result
  }, {})
}
export default {
  props: {
    menuitems: Object
  },
  data () {
    var submenus = objectMap(this.menuitems, function(value) {
      return false
    })
    return {
      submenus: submenus
    }
  },
  methods: {
    changePage: function (name) {
      this.$store.commit('changePage', name)
    },
    doNothing: function () {
    }
  }
}
</script>
<style lang="scss" scoped>
.nounderline {
  text-decoration: none!important;
}
.nopadding {
  padding: 0!important;
}
.bold {
  font-weight: 700;
}
</style>
