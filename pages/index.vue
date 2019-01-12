<template>
  <div class="flex">
    <img :src="imagePath" class="centered">
    <span v-html="bio"></span>
  </div>
</template>

<script>
export default {
  computed: {
    bio () { return this.$store.state.bio },
    imagePath () { 
      console.log(this.$store.state.projects)
      const path = this.$store.state.projects[2].image.path
      const apiUrl = process.env.cockpit.apiUrl
      const token = process.env.cockpit.apiToken
      return `https://tom.camsexton.com/${path}`
    }
  }
}
</script>
<style scoped>
.flex {
  display: flex;
  flex-direction: column;
  align-items: middle;
  justify-content: center;
}
.centered {
  width: 100%;
  display: inline-block;
  margin: 0 auto;
}
</style>
