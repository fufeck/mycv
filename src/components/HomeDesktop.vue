<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->
<template>
  <div id="app">
    <MenuDesktop :items="pages" :activeItemIndex="activeItemIndex" @select="scrollMeTo($event)"/>

    <div v-for="p in pages" :key="'page#' + p.id" :class="p.class" :ref="p.id">
      <div class="title">
        <h1>{{ p.title }}</h1>
        <h2>{{ p.subtitle }}</h2>
      </div>
      <p class="text">{{ p.description }}</p>
      <div class="text" v-for="(t, index) in p.tab" :key="p.id + '#' + index">
        <h3>{{ t.title }}</h3>
        <h4>{{ t.subtitle }}</h4>
        <p v-if="t.html" v-html="t.description"></p>
        <p v-else>{{ t.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>

import { pages } from './../data/pages.data.ts'
import MenuDesktop from "./MenuDesktop.vue"

export default {
  components: {
    MenuDesktop
  },
  data() {
    return {
      activeItemIndex: 0,
      pages,
      marge: 70,
    };
  },
  methods: {
    scrollMeTo(refName) {
      const element = this.$refs[refName][0];
      const top = element.offsetTop - this.marge;
      window.scrollTo({
        top,
        left: 0,
        behavior: 'smooth'
      });
      this.activeItemIndex = this.pages.findIndex(item => item.name === name)
    },
    onScroll() {
      this.setActiveItemIndex();
    },
    setActiveItemIndex() {
      let newIndex = 0;
      for (let i = 0; i < this.pages.length; i++) {
        const p = this.pages[i];
        if ( this.$refs[ p.id ][0]?.offsetTop - this.marge <= window.top.scrollY ) {
          newIndex = i
        }
      }
      this.activeItemIndex = newIndex;
    },
  },
  mounted() {
    this.setActiveItemIndex();
    window.addEventListener("scroll", this.onScroll)
  },
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
    padding: 50px 0;
    &.center {
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
    }
    .text {
      width: 600px;
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
