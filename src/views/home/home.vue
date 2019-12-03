<template>
  <div id="home">
    <home-header></home-header>
    <router-view></router-view>
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
