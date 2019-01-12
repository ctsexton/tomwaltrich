<template>
  <md-app class="container">
    <md-app-toolbar class="md-accent">
      <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
        <md-icon>menu</md-icon>
      </md-button>
    </md-app-toolbar>
    <md-app-drawer md-permanent="full" :md-active.sync="menuVisible">
      <md-app-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">tom waltrich</span>
      </md-app-toolbar>
      <md-list>
        <md-list-item v-for="item in menu" :key="item">
          <md-button href="" target="_blank" class="md-flat">
            {{ item }}
            <md-icon>add</md-icon>
          </md-button>
        </md-list-item>
      </md-list>
    </md-app-drawer>
    <md-app-content class="md-body-2">
      <span v-html="bio" class="bio"></span>
    </md-app-content>
  </md-app>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Toolbar from '@/components/Toolbar.vue'
export default {
  components: {
    Navigation,
    Toolbar
  },
  data: () => ({
    menuVisible: false,
    menu: [
      'video',
      'teaching',
      'projects',
      'about',
      'gigs',
      'contact'
    ]
  }),
  async asyncData({ $axios }) {
    const apiUrl = process.env.cockpit.apiUrl
    const token = process.env.cockpit.apiToken
    const bio = await $axios.$get(`${apiUrl}/singletons/get/bio/text?token=${token}`);
    const projects = await $axios.$get(`${apiUrl}/collections/get/projects?token=${token}`)
    return { bio, projects }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  font-family: "Raleway", "sans-serif";
}

</style>

