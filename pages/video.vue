<template>
  <v-layout column justify-start align-center>
    <v-responsive :aspect-ratio="16/9" v-for="video in videos" :key="video.title" width="100%" max-width="900px" class="my-5 video-card">
      <iframe :src="video.youtube_link" width="100%" height="100%" class="remove-border"></iframe>
    </v-responsive>
  </v-layout>
</template>
<script>
export default {
  computed: {
    videos: function () { return this.$store.state.videos.entries }
  }
}
</script>
<style scoped>
>>>.remove-border {
  border: none;
}
>>>.video-card {
  padding: 2%;
  background: rgba(0,0,0,0.5);
}
</style>
