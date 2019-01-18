<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card max-width="900px">
        <v-card-text class="subheading">
          <span id="bio" v-html="teaching.text"></span>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  computed: {
    teaching () { return this.$store.state.teaching }
  }
}
</script>
