<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <h1>{{ info }}</h1>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const msg = ref('Hello World')
const info = ref('公众号:《小张Python》')
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
