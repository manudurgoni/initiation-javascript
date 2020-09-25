<template>
  <div>
    <h2>{{ city.name }}</h2>
    <div class="temperature">
      <p class="temperature__current">Température <strong>{{ city.main.temp }}</strong></p>
      <p class="temperature__min">Min <strong>{{ city.main.temp_min  }}</strong></p>
      <p class="temperature__max">Max <strong>{{ city.main.temp_max }}</strong></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    city: {
      type: Object,
      default: null
    }
  }
}
</script>

