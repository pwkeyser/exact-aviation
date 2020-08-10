<template>
  <div class="BubbleCard">
    <p class="BubbleTop">
      {{ header }}
    </p>
    <p class="BubbleBottom">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'BubbleCard',
  components: {},
  props: {
    header: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  created() {
    console.log('Running BubbleCard')
    console.log(this.header)
    console.log(this.text)
  },
}
</script>

<style>
.BubbleCard {
  position: relative;
  height: 220px;
  width: 300px;
  text-align: center;
  border: 100px;
  align-items: center;
  margin: 0;
  padding: 0;
}

.BubbleTop {
  position: absolute;
  color: #ffffff;
  color: #00b600;
  color: black;
  background-color: #4372c4;
  background-color: #99fe00;
  border-radius: 10px;
  border: solid 1px;
  border-color: #c1c9d8;
  width: 200px;
  height: 50px;
  margin: 0 auto;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;
  line-height: 1.5rem;
  vertical-align: middle;
  display: flex;
  justify-content: center;
  align-items: center;
}

.BubbleBottom {
  top: 50px;
  position: absolute;
  border-radius: 5px;
  /* margin-top: 0px; */
  height: 200px;
  width: 300px;
  border: 1px solid;
  border-color: #c1c9d8;
  background-color: white;
  padding: 10px;
  margin: 0;
  text-align: center;
  align-items: center;
  justify-content: space-evenly;
  display: flex;
}
</style>
