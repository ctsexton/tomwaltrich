<template>
  <v-layout justify-center>
    <v-flex xs12 sm8 md8>
      <v-img :src="imgPath"/>
      <v-card class="project-card">
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
>>>.project-card {
  padding: 2%;
  background: rgba(0,0,0,0.5);
}
</style>
