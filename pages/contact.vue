<template>
  <v-layout justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card flat width="100%" class="standard-card">
        <v-img :src="contact"></v-img>
      </v-card>
      <v-card width="100%" class="pa-4 standard-card">
        <v-flex>
          <span class="display-1">Contact Tom</span>
          <v-form>
            <v-text-field label="Name" required></v-text-field>
            <v-text-field label="Email" required></v-text-field>
            <v-textarea label="Message" required></v-textarea>
            <v-btn left large color="secondary">Submit</v-btn>
          </v-form>
        </v-flex>
      </v-card>
    </v-flex>
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
<style scoped>
>>>.semiTransparent {
  background: rgba(0,0,0,0.5);
}
</style>
