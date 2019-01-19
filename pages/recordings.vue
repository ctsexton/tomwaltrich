<template>
  <v-layout justify-center>
    <v-flex xs12 class="limit">
      <v-layout column>
        <v-flex v-for="recording in recordings" :key="recording.title">
          <v-card max-width="900px" width="100%" class="project-card my-5">
            <v-img :src="`${basePath}${recording.image.path}`">
              <v-layout align-end fill-height>
                <v-card class="img-overlay">
                  <v-card-title class="display-1">{{ recording.artist }}</v-card-title>
                  <v-card-text class="subheading">{{ recording.title }}</v-card-text>
                  <v-card-text class="subheading">{{ recording.year }}</v-card-text>
                </v-card>
              </v-layout>
            </v-img>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  computed: {
    recordings: function () { return this.$store.state.recordings.entries },
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
  width: 100%;
}
>>>.limit {
  max-width: 900px;
}
</style>

