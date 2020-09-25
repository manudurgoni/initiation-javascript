<template>
  <div>
    <h2>{{ city.name }}</h2>
    <div class="temperature">
      <p class="temperature__current">Température <strong>{{ city.main.temp }}</strong></p>
      <p class="temperature__min">Min <strong>{{ city.main.temp_min  }}</strong></p>
      <p class="temperature__max">Max <strong>{{ city.main.temp_max }}</strong></p>
    </div>

    <div id="map"></div>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
export default {
  props: {
    city: {
      type: Object,
      default: null
    }
  },
  data() {
    
  },
  mounted() {
    if (this.city) {
      mapboxgl.accessToken = 'pk.eyJ1IjoibWFudWR1cmdvbmkiLCJhIjoiY2pxejVnOWdnMGEyNDQycG9tcTI3MDVlbCJ9.WPrLAimZF5EcdDGcHdQvMw';
      // eslint-disable-next-line no-unused-vars
      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [this.city.coord.lon, this.city.coord.lat],
        zoom: 9
      });
    }
  }
}
</script>

<style scoped>
#map {
  width: 100%;
  height: 500px;
  background-color: grey;
}
</style>