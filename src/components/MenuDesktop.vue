<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->
<template id="the-menu-tpl">
  <div class="header">
    <div class="menu__wrapper">
      <ul>
        <li v-for="(item, i) in items"
            :key="i"
            class="menu__item"
            @mouseover.stop="setUnderlinePosition(i)"
            @mouseleave.stop="setPositionOnLeave()"
        >
          <a :href="item.uri" @click="setActive(item.id)">{{item.name}}</a>
        </li>
      </ul>
      <hr :style="getStyles">
    </div>
  </div>
</template>

<script>

export default {
  props: {
    items: Array,
    activeItemIndex: Number,
  },
  data () {
    return {
      sliceSize: 0,
      index : -1,
    }
  },
  computed: {
    getMarginLeft() {
      if ( this.index >= 0 ) {
        return this.index * this.sliceSize
      }
      return this.activeItemIndex * this.sliceSize
    },
    getStyles () {
      return [
        {'width': `${this.sliceSize}%`},
        {'margin-left': `${this.getMarginLeft}%`}
      ]
    }
  },
  methods: {
    init () {
      this.sliceSize = 100 / this.items.length
    },
    setUnderlinePosition (index) {
      this.index = index
    },
    setPositionOnLeave () {
      this.index = -1;
    },
    setActive (name) {
      this.$emit('select', name)
    }
  },
  mounted () {
    this.init()
  }
};
</script>

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style lang="scss" scoped>
  
$yellow: #fec788;
$black: #2b3341;

.header {
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  padding-top: 20px;
  background-color: $yellow;
  display: flex;
  justify-content: end;
}
.menu__wrapper {
  background-color: $yellow;
  color: $black;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    .menu__item {    
      display: inline;
      text-align: center;
      a {
        display: inline-block;
        padding: .75rem 0;
        margin: 0;
        text-decoration: none;
        color: $black;
        min-width: 120px;
        cursor: pointer;
      }
    }
  }
  hr {
    height: .25rem;
    margin: 0;
    background: $black;
    border-radius: 2px;
    border: none;
    transition: margin .3s cubic-bezier(0.250, 0.460, 0.450, 0.940);
  }
}

</style>