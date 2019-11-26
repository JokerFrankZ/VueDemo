<template>
  <div id="mainTabBar">
    <tab-bar>
      <tab-bar-item path="/home">
        <svg class="icon" aria-hidden="true" slot="item-icon">
          <use xlink:href="#icondianying"></use>
        </svg>
        <span slot="item-text">电影</span>
      </tab-bar-item>
      <tab-bar-item path="/cinema">
        <svg class="icon" aria-hidden="true" slot="item-icon">
          <use xlink:href="#iconcinema"></use>
        </svg>
        <span slot="item-text">影院</span>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <svg class="icon" aria-hidden="true" slot="item-icon">
          <use xlink:href="#iconiconuser"></use>
        </svg>
        <span slot="item-text">我的</span>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import tabBar from './tabbar/tabBar'
import tabBarItem from './tabbar/tabBarItem'
export default {
  name: 'mainTabBar',
  data: function() {
    return {}
  },
  components: {
    tabBar,
    tabBarItem
  },
  methods: {}
}
</script>

<style scoped></style>
