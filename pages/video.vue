<template>
  <v-container fill-height grid-list-md>
    <v-layout row justify-space-around align-start wrap>
      <v-flex xs12 md6 v-for="video in videos" :key="video.title">
        <v-card>
          <v-responsive :aspect-ratio="16/9" width="100%" class="standard-card">
            <iframe :src="video.youtube_link" width="100%" height="100%" class="remove-border"></iframe>
          </v-responsive>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
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
</style>
