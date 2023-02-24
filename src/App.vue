<template>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
  #app {
    position: relative;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    overflow: scroll;
  }
</style>
