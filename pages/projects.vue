<template>
  <v-layout justify-center wrap>
    <v-flex v-for="video in videos" :key="video.title" class="my-5" xs7>
      <v-card class="project-card my-5">
        <v-img :src="`${basePath}${video.image.path}`">
          <v-layout align-end fill-height>
            <v-card class="img-overlay">
              <v-card-title class="display-1">{{ video.title }}</v-card-title>
              <v-card-text class="subheading"><span v-html="video.description"></span></v-card-text>
            </v-card>
          </v-layout>
        </v-img>
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
>>>.project-card {
  padding: 2%;
  background: rgba(0,0,0,0.5);
}
>>>.img-overlay {
  background: rgba(0,0,0,0.75);
  border-radius: 0px;
}
>>>.limit {
  max-width: 900px;
}
</style>

