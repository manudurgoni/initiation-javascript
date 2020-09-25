<template>
  <div id="app">
    <div class="container">
      <h1>Hello Vue.js ☀️</h1>
      <img src="https://media.giphy.com/media/VekcnHOwOI5So/giphy.gif" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
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
