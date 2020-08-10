<template>
  <div class="BubbleCards">
    <bubble-card
      v-for="(bubble, idx) in array"
      :key="idx"
      :header="bubble.headerText"
      :text="bubble.detailText"
    />
  </div>
</template>

<script>
import BubbleCard from '~/components/BubbleCard'

export default {
  name: 'BubbleCards',
  component: {
    'bubble-card': BubbleCard,
  },
  props: {
    array: {
      type: Array,
      required: true,
    },
  },
  created() {
    console.log('Running BubbleCards')
    console.log(this.array)
  },
}
</script>

<style>
.BubbleCards {
  /* min-width: 400px;
  min-height: 500px; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  /* flex-wrap: wrap; */
  padding: 10px;
  margin: 10px;
}
</style>
