<template>
  <span v-html="teaching"></span>
</template>

<script>
export default {
  computed: {
    teaching () { return this.$store.state.teaching }
  }
}
</script>
