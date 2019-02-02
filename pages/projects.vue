<template>
  <v-layout justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card v-for="video in videos" :key="video.title" class="standard-card break-word my-5">
        <v-img max-width="100%" :src="`${basePath}${video.image.path}`" />
        <v-card-text class="headline">{{ video.title }}</v-card-text>
        <v-card-text class="subheading"><span v-html="video.description"></span></v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  computed: {
    videos: function () { return this.$store.state.projects },
    basePath: function () { return process.env.cockpit.realUrl }
  }
}
</script>
<style scoped>
>>>a {
  color: white;
}
>>>.break-word {
  word-wrap: break-word;
}
</style>

