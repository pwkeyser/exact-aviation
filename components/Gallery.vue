<template>
  <div id="gallery">
    <div class="NavBarGap GreyColour" />
    <b-jumbotron :header="headerText" class="NoPaddingMargins SBackground">
      <div class="pre-formatted">
        {{ detailText }}
      </div>
    </b-jumbotron>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="3000"
      controls
      indicators
      background="#ababab"
      img-width="512"
      img-height="240"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="../assets/picture2.png"
      />
      <b-carousel-slide img-src="../assets/picture3.png">
        <h1>Hello world!</h1>
      </b-carousel-slide>
      <b-carousel-slide img-src="../assets/picture4.png" />
      <b-carousel-slide
        caption="Customer One"
        text="Project completed from <x> to <y> in the <country> involving <z> airports"
        img-src="../assets/picture5.png"
      >
        <h1>Customer One</h1>
      </b-carousel-slide>
      <b-carousel-slide
        caption="Customer Twenty One"
        text="Project completed from <x> to <y> in the <country> involving <z> airports"
        img-src="../assets/picture6.png"
      />
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  data() {
    return {
      headerText: 'Completed Projects',
      detailText: 'Here are a few examples of our work.',
      slide: 0,
      sliding: null,
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
  },
}
</script>

<style></style>
