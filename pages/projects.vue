<template>
  <v-layout justify-center wrap>
    <v-flex v-for="video in videos" :key="video.title" class="my-5" xs12 sm10 md10 lg8>
      <v-card flat class="standard-card">
        <v-img :src="`${basePath}${video.image.path}`" />
      </v-card>
      <v-card class="standard-card">
        <v-card-title class="display-1">{{ video.title }}</v-card-title>
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
>>>.remove-border {
  border: none;
}
>>>.img-overlay {
  background: rgba(0,0,0,0.75);
  border-radius: 0px;
}
>>>.limit {
  max-width: 900px;
}
>>>a {
  color: white;
}
</style>

