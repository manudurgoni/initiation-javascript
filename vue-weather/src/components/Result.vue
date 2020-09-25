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
  created() {},
  mounted() {
    console.log("la page est ready")
    
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9 // starting zoom
    });
    console.log(map)
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