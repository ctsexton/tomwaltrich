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
      const baseUrl = process.env.cockpit.baseUrl
      return `${baseUrl}${path}`
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~vue-material/src/components/MdLayout/mixins.scss";
.flex {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: middle;
  font-size: 14px;
  padding: 0;
}

.image--centered {
  width: 100%;
  display: inline-block;
  margin: 0;
}

.text--centered {
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
