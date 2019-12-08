<template>
  <div id="home">
    <home-header></home-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import homeHeader from './components/homeHeader'
export default {
  name: 'home',
  data: function() {
    return {}
  },
  methods: {},
  components: {
    homeHeader
  }
}
</script>

<style scoped></style>
