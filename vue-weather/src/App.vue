<template>
  <div id="app">
    <div class="container">
      <h1>Hello Vue.js ☀️</h1>
      <v-form></v-form>
    </div>
  </div>
</template>

<script>
import VForm from './components/Form'
export default {
  name: 'App',
  components: {
    VForm
  }
}
</script>

<style>
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    margin: 0;
    padding: 0;
  }

  .container {
    max-width: 960px;
    padding: 40px;
    margin: 0 auto;
  }
</style>
