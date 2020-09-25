<template>
  <div>
    <form class="Form" @submit.prevent="getWeatherByCity">
      <input type="text" placeholder="Selectionnez une ville" v-model="city">
      <input type="submit" value="Ok">
    </form>

    <v-result v-if="result"></v-result>
  </div>
</template>

<script>
import VResult from './Result'
export default {
  components: {
    VResult
  },
  data() {
    return {
      city: null,
      result: null
    }
  },

  methods: {
    async getWeatherByCity() {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=31e6e989590a80e12446183d2fc1d332&units=metric`

      let response = await fetch(url)
      let json = await response.json()

      this.result = json
    }
  }
}
</script>

<style scoped>
input {
  display: block;
  margin: 10px 0;
  width: 100%;
  padding: 10px;
}
</style>