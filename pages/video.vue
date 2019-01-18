<template>
  <div>
    <div v-for="video in videos.entries" 
      class="card"
      :key="video._id">
      <h1 class="md-display-1 video-title">{{ video.title }}</h1>
      <div class="video-parent">
        <iframe 
          class="video-frame"
          width="640px"
          :src="video.youtube_link"
          frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    videos () { return this.$store.state.videos }
  }
}
</script>
<style lang="scss" scoped>
.card {
  display: flex;
  max-width: 900px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  padding: 0 2em 2em;
  margin: 5em auto;
}
.video-parent {
  display: relative;
  width: 100%;
  margin: 0 auto;
}
.video-frame {
  width: 100%;
  height: 360px;
}
.video-title {
  text-align: center;
}
</style>
