<template>
  <v-layout justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card flat class="standard-card">
        <v-img :src="imgPath"/>
      </v-card>
      <v-card class="standard-card">
        <v-card-text class="subheading">
          <span id="bio" v-html="bio"></span>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  computed: {
    bio: function () { return this.$store.state.bio.text },
    imgPath: function () {
      const realUrl = process.env.cockpit.realUrl
      const localPath = this.$store.state.bio.image.path
      return `${realUrl}${localPath}`
    }
  }
}
</script>
<style scoped>
</style>
