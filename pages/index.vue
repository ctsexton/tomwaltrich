<template>
  <div class="flex">
    <img :src="imagePath" class="image--centered">
    <span class="text--centered" id="bio" v-html="bio"></span>
  </div>
</template>

<script>
export default {
  computed: {
    bio () { return this.$store.state.bio },
    imagePath () { 
      const path = this.$store.state.projects[2].image.path
      const realUrl = process.env.cockpit.realUrl
      return `${realUrl}${path}`
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~vue-material/src/components/MdLayout/mixins.scss";
.container {
  display: inline-block;
  width: 100%;
  padding: 0;
}
.flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: middle;
  width: 100%;
  position: relative;
  font-size: 14px;
  padding: 0;
}

.image--centered {
  max-height: 900px;
  margin: 0 auto;
}

.text--centered {
  display: none;
  padding: 0 1em;
  @include md-layout-large-and-up {
    font-size: 1.4em;
    line-height: 1.25em;
    font-weight: 400;
    position: absolute;
    top: 0;
    left: 0;
    max-width: 750px;
    width: 100%;
    margin: 20px;
    background-color: rgba(0, 0, 0, 0.6);
  }
  @media (min-width: 1440px) {
    font-size: 1.5em;
  }
}

</style>
