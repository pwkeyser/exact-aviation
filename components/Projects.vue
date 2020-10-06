<template>
<div id="projects">
  <div class="NavBarGap GreyColour" />
  <b-jumbotron :header="headerText" class="NoPaddingMargins">
    <div class="pre-formatted">
      {{ descriptionText }}
    </div>
    <gmap-map :center="center" :map-type-id="mapTypeId" :zoom="2">
      <gmap-marker v-for="(item, index) in markers" :key="index" :position="item.position" @click="center = item.position" />
    </gmap-map>
  </b-jumbotron>
</div>
</template>

<script>
export default {
  name: 'Projects',
  components: {},
  data() {
    return {
      headerText: 'Current Projects',
      descriptionText: '',
      center: {
        lat: -25.8645677,
        lng: 28.2409667
      },
      mapTypeId: 'terrain',
      markers: [{
          position: {
            lat: 42.5745676,
            lng: 21.0273197
          }
        },
        {
          position: {
            lat: -18.0459206,
            lng: 178.5578667
          }
        },
        {
          position: {
            lat: 0.0422892,
            lng: 32.4346266
          }
        },
        {
          position: {
            lat: -34.0043598,
            lng: 22.378785
          }
        },
        {
          position: {
            lat: -4.1044393,
            lng: 16.4745968
          }
        },
        {
          position: {
            lat: 36.5308882,
            lng: 2.0916757
          }
        },
      ],
    }
  },
}
</script>

<style>
.vue-map-container {
  height: 500px;
  /* max-width: 992px; */
  width: 100%;
}
</style>
