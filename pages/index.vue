<template>
  <v-layout wrap align-center justify-center>
    <v-flex xs8>
      <v-card flat class="transparent pa-4">
        <v-img src="/twm_yellow.svg" class="cover"/>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  computed: {
    imgPath: function () {
      const realUrl = process.env.cockpit.realUrl
      const localPath = this.$store.state.bio.image.path
      return `${realUrl}${localPath}`
    }
  }
}
</script>
<style scoped>
.cover {
}
</style>

