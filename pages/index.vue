<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card max-width="900px">
        <v-card-text>
          <span id="bio" v-html="bio"></span>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  computed: {
    bio () { return this.$store.state.bio }
  }
}
</script>
