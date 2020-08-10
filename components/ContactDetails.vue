<template>
  <b-col class="ContactDetails align-middle">
    <b-row>
      <Logo />
    </b-row>
    <b-row align-v="center">
      <b-img src="~/assets/location_on-24px.svg" alt="Location" />
      <p>Centurion, South Africa</p>
    </b-row>
    <b-row>
      <b-img src="~/assets/phone-24px.svg" alt="Location" />
      <p>+27 12 345 6789</p>
    </b-row>
    <b-row>
      <b-img src="~/assets/mail-24px.svg" alt="Location" />
      <p>info@exactaviation.co.za</p>
    </b-row>
  </b-col>
</template>

<script>
export default {}
</script>

<style>
.ContactDetails {
  font-size: 1.5em;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
}
</style>
