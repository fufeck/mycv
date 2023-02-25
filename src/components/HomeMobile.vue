<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->
<template>
  <div id="app">
    <!-- <div class="header">
      <div class="menu">
        <button v-for="p in pages" :key="'button#' + p.id" @click="scrollMeTo(p.id)">{{ p.name }}</button>
      </div>
    </div> -->

    <div v-for="p in pages" :key="'page#' + p.id" :class="p.class" :ref="p.id">
      <div class="title">
        <h1>{{ p.title }}</h1>
        <h2>{{ p.subtitle }}</h2>
      </div>
      <p class="text">{{ p.description }}</p>
      <div class="text" v-for="(t, index) in p.tab" :key="p.id + '#' + index">
        <h3>{{ t.title }}</h3>
        <h4>{{ t.subtitle }}</h4>
        <p>{{ t.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>

import { pages } from './../data/pages.data.ts'

export default {
  data() {
    return {
      pages,
    };
  },
  methods: {
    scrollMeTo(refName) {
      const element = this.$refs[refName][0];
      const top = element.offsetTop - 80;

      window.scrollTo({
        top,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
};
</script>

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style lang="scss" scoped>
  
  $yellow: #fec788;
  $black: #2b3341;
  
  .color-yellow {
    color: $yellow;
  }
  .color-black {
    color: $black;
  }
  .bg-yellow {
    background-color: $yellow;
  }
  .bg-black {
    background-color: $black;
  }
  
  .page {
    position: relative;
    min-height: 100vh;
    &.center {
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
    }
    .text {
      width: 90%;
      text-align: justify;
      h3 {
        margin-bottom: 2px;
      }
      h4 {
        margin-top: 2px;
        margin-bottom: 2px;
      }
      p {
        margin-top: 2px;
      }
    }
  }


</style>
