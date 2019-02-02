<template>
  <v-layout justify-center align-center fill-height wrap>
    <v-card v-for="recording in recordings" :key="recording.title" max-width="500px" width="100%" elevation="4" class="ma-5">
      <v-img :aspect-ratio="1" :src="`${basePath}${recording.image.path}`">
        <a :href="recording.link">
          <v-layout class="img-overlay" justify-center align-center fill-height>
            <v-card flat class="see-through">
              <v-card-text class="display-1 pa-2 text-xs-center">{{ recording.artist }}</v-card-text>
              <v-card-text class="subheading pa-0 pl-2 text-xs-center">{{ recording.title }}</v-card-text>
              <v-card-text class="subheading pa-0 pl-2 text-xs-center">{{ recording.year }}</v-card-text>
              <v-card-text class="subheading pa-0 pl-2 text-xs-center">Listen</v-card-text>
            </v-card>
          </v-layout>
        </a>
      </v-img>
    </v-card>
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
  opacity: 0;
  transition: opacity 0.1s;
  cursor: pointer;
}
>>>.img-overlay:hover {
  opacity: 1;
}
>>>.rm_margin {
  margin: 0;
  padding: 0;
}
>>>.limit {
  max-width: 950px;
}
>>>.see-through {
  background: transparent;
}
>>>a {
  text-decoration: none;
}
</style>

