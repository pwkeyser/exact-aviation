<template>
  <b-card
    :header="header"
    header-bg-variant="success"
    header-text-variant="white"
    align="center"
    class="Cards"
  >
    <b-card-text>{{ detail }}</b-card-text>
  </b-card>
</template>

<script>
// <b-card :header="header" align="center">
export default {
  name: 'Cards',
  components: {},
  props: {
    header: {
      type: String,
      required: true,
    },
    detail: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      color: '#99fe00',
    }
  },
}
</script>

<style>
.Cards {
  /*
  border-radius: 5px;
  position: relative;
  padding: 15px 15px;
  background-color: #c1c9d8;
  margin: 50px 0;
  height: 200px;
  box-shadow: 0 2px 5px #ccc;
  text-align: left;
  min-width: 300px;
  */
  box-shadow: 0 2px 5px #ccc;
  box-shadow: 0 2px 5px #99fe00;
  opacity: 0.95;
}

.Cards:hover {
  transform: scale(1.1);
  /* padding: 20px 0;
  box-shadow: 0 2px 5px #99fe00; */
  box-shadow: 0 2px 5px #0db80e;
}
</style>
