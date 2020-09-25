<template>
  <form class="Form">
    <input type="text" placeholder="Selectionnez une ville" v-model="city">
    <input type="submit" value="Ok">
  </form>
</template>

<script>
export default {
  data() {
    return {
      city: null
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