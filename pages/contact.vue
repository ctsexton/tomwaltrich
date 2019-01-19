<template>
  <v-layout column justify-center align-center>
    <v-card flat width="100%" max-width="750px" class="pa-2">
      <v-img :src="contact"></v-img>
    </v-card>
    <v-card flat width="100%" max-width="750px" class="pa-4">
      <v-flex>
        <span class="display-1">Contact Tom</span>
        <v-form>
          <v-text-field label="Name" required></v-text-field>
          <v-text-field label="Email" required></v-text-field>
          <v-textarea label="Message" required></v-textarea>
          <v-btn left large color="purple">Submit</v-btn>
        </v-form>
      </v-flex>
    </v-card>
  </v-layout>
</template>
<script>
export default {
  computed: {
    contact: function () {
      const imgPath = this.$store.state.generalConfig.contact_form_image.path
      const realPath = process.env.cockpit.realUrl
      return `${realPath}${imgPath}`
    }
  }
}
</script>
