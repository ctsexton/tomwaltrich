<template>
  <div class="container md-layout md-alignment-top-left">
    <div class="text md-layout-item">
      <span class="" v-html="teachingText"></span>
    </div>
    <div class="md-layout-item">
      <img class="md-layout-item" :src="teachingImg" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    teachingText () { return this.$store.state.teaching.text },
    teachingImg () { 
      const path = this.$store.state.teaching.image.path
      const realUrl = process.env.cockpit.realUrl
      return `${realUrl}${path}`
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  flex-wrap: wrap-reverse;
}
.img {
  max-width: 900px;
}
.text {
  background: rgba(0,0,0,0.5);
  max-width: 900px;
}
</style>
