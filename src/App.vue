<template>
  <div>
    <MqResponsive target="md+">
      <HomeDesktop/>
    </MqResponsive>
    <MqResponsive target="md-">
      <HomeMobile/>
    </MqResponsive>
  </div>
</template>

<script>

import { MqResponsive } from "vue3-mq";
import HomeDesktop from './components/HomeDesktop.vue'
import HomeMobile from './components/HomeMobile.vue'

export default {
  name: 'App',
  components: {
    HomeDesktop,
    HomeMobile,
    MqResponsive
  }
}
</script>

<style lang="scss">
  #app {
    position: relative;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    overflow: scroll;
  }
</style>
