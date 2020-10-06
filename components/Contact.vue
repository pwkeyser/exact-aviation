<template>
<div id="contact">
  <b-jumbotron :header="headerText" class="NoPaddingMargins">
    <div class="EmptyRow" />
    <div>{{ detailText }}</div>
    <div class="EmptyRow" />
    <b-row>
      <b-col md="8" xl="9">
        <b-form @submit="onSubmit">
          <b-form-row md="8" xl="9">
            <b-form-group id="name-group" label="Name:" label-for="name">
              <b-form-input id="name" v-model="form.name" required placeholder="Enter your name">
              </b-form-input>
            </b-form-group>
            <div class="EmptyColumn" />
            <b-form-group id="email-group" label="Email:" label-for="email">
              <b-form-input id="email" v-model="form.email" type="email" required placeholder="Enter your email address">
              </b-form-input>
            </b-form-group>
          </b-form-row>
          <b-form-group id="message-group" label="Message:" label-for="message">
            <b-form-textarea id="message" v-model="form.message" required placeholder="Enter your message" rows="4">
            </b-form-textarea>
          </b-form-group>
          <b-button type="submit" variant="success">Send</b-button>
        </b-form>
      </b-col>
      <b-col sm="4" md="4" xl="3">
        <b-col class="ContactDetails align-middle">
          <b-row>
            <Logo />
          </b-row>
          <b-row class="EmptyRow"></b-row>
          <b-row align-v="center">
            <div class="ImageWidth">
              <b-img v-bind="props" src="~/assets/location_on-24px.svg" alt="Location" />
            </div>
            <h6>Centurion, South Africa</h6>
          </b-row>
          <b-row>
            <div class="ImageWidth">
              <b-img v-bind="props" src="~/assets/phone-24px.svg" alt="Location" />
            </div>
            <h6>+27 12 345 6789</h6>
          </b-row>
          <b-row>
            <div class="ImageWidth">
              <b-img v-bind="props" src="~/assets/mail-24px.svg" alt="Location" />
            </div>
            <h6>info@exactaviation.co.za</h6>
          </b-row>
        </b-col>
      </b-col>
    </b-row>
    <b-row>{{response}}</b-row>
  </b-jumbotron>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Contact',
  data() {
    return {
      headerText: 'Contact Us',
      detailText: 'Do you have any questions? Please do not hesitate to contact us directly and our team will come back to you.',
      props: {
        width: 25,
        height: 25,
      },
      form: {
        name: '',
        email: '',
        message: ''
      },
      response: ''
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      console.log(this.form.name)
      console.log(this.form.email)
      console.log(this.form.message)

      if (this.form.name.length === 0 || this.form.email.length === 0 || this.form.message.length === 0) {
        this.response = 'Some fields are empty - please provide data for all fields before clicking \'send\'.'
      } else {
        this.response = ''

        const payload = {
          name: this.form.name,
          email: this.form.email,
          message: this.form.message
        }

        console.log(payload)

        axios.post('~/components/email.php', payload)
          .then(res => {
            console.log(res)
            this.response = 'Message sent.'
          })
          .catch(error => {
            console.log(error)
            this.response = 'Message could not be sent.'
          })
      }
    },
  },
}
</script>

<style>
.EmptyColumn {
  width: 40px;
}

.EmptyRow {
  height: 40px;
}

.ImageWidth {
  width: 40px;
  height: 40px;
}
</style>
