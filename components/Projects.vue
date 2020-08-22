<template>
  <div id="projects">
    <div class="NavBarGap GreyColour" />
    <b-jumbotron :header="headerText" class="NoPaddingMargins">
      <div class="pre-formatted">
        {{ descriptionText }}
      </div>
      <gmap-map :center="center" :map-type-id="mapTypeId" :zoom="2">
        <gmap-marker
          v-for="(item, index) in markers"
          :key="index"
          :position="item.position"
          @click="center = item.position"
        />
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
      center: { lat: -25.8645677, lng: 28.2409667 },
      mapTypeId: 'terrain',
      markers: [
        { position: { lat: -19.9758282, lng: 23.425978 } },
        { position: { lat: -17.8305953, lng: 25.1615299 } },
        { position: { lat: -27.3942096, lng: 153.1196416 } },
        { position: { lat: -13.8304448, lng: -172.0102986 } },
        { position: { lat: 42.5745676, lng: 21.0273197 } },
        { position: { lat: 19.114488, lng: 50.1229026 } },
        { position: { lat: -10.6875155, lng: 40.2206478 } },
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
