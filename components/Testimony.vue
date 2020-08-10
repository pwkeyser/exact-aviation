<template>
  <div class="Testimony">
    <p class="CustomerText">"{{ text }}"</p>
    <p>
      <strong>{{ name }}</strong> - {{ title }}, {{ company }}, {{ location }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Testimony',
  components: {},
  props: {
    text: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>

<style>
.CustomerText {
  font-size: 1.5em;
}
.Testimony {
  padding: 50px;
  background-color: white;
  border-radius: 5px;
}
</style>
