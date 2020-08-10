<template>
  <div id="contact">
    <b-jumbotron :header="headerText" class="NoPaddingMargins">
      <b-row>
        <b-col sm="8">
          <contact-area />
        </b-col>
        <b-col sm="4">
          <contact-details />
        </b-col>
      </b-row>
    </b-jumbotron>
  </div>
</template>

<script>
import ContactArea from '~/components/ContactArea'
import ContactDetails from '~/components/ContactDetails'

export default {
  name: 'Contact',
  components: {
    'contact-area': ContactArea,
    'contact-details': ContactDetails,
  },
  data() {
    return {
      headerText: 'Contact Us',
    }
  },
}
</script>

<style lang="scss" scoped></style>
