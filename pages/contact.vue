<template>
  <v-layout justify-center class="pt-5">
    <v-flex xs12 sm8 md6>
      <v-card flat width="100%" class="standard-card">
        <v-img :src="contact"></v-img>
      </v-card>
      <v-card v-if="submitStatus != 'OK'" width="100%" class="pa-4 standard-card">
        <v-flex>
          <span class="display-1">Contact Tom</span>
          <v-form>
            <v-text-field 
							v-model="name" 
              :error-messages="nameErrors"
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
              label="Name" 
              required>
            </v-text-field>
            <v-text-field 
              v-model="email" 
              :error-messages="emailErrors"
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
              label="Email" 
              required>
            </v-text-field>
            <v-textarea 
              v-model="message" 
              :error-messages="messageErrors"
              @input="$v.message.$touch()"
              @blur="$v.message.$touch()"
              label="Message" 
              required>
            </v-textarea>
            <v-btn @click="submit" left large color="secondary">Submit</v-btn>
          </v-form>
        </v-flex>
      </v-card>
      <v-card v-else>
        <v-card-text class="display-2 text-xs-center py-5">Thanks for your message!</v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'
export default {
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(30) },
    email: { required, email },
    message: { required, maxLength: maxLength(500) }
  },
  data () {
    return {
      name: '',
      email: '',
      message: '',
      submitStatus: null
    }
  },
  methods: {
    submit: function () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.$axios.$post(this.formUrl,
          {
            form: {
              Name: this.name,
              Email: this.email,
              Message: this.message
            }
          }
        )
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 500)
      }
    }
  },
  computed: {
    contact: function () {
      const imgPath = this.$store.state.generalConfig.contact_form_image.path
      const realPath = process.env.cockpit.realUrl
      return `${realPath}${imgPath}`
    },
    formUrl: function () {
      const apiUrl = process.env.cockpit.realUrl
      const token = process.env.cockpit.apiToken
      return `${apiUrl}/api/forms/submit/Contact?token=${token}`
    },
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    messageErrors () {
      const errors = []
      if (!this.$v.message.$dirty) return errors
      !this.$v.message.maxLength && errors.push('500 characters max.')
      !this.$v.message.required && errors.push('Message is required.')
      return errors
    }
  }
}
</script>
<style scoped>
>>>.semiTransparent {
  background: rgba(0,0,0,0.5);
}
</style>
