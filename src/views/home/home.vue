<template>
  <div>
    <home-header title="心眼电影"><div></div></home-header>
  </div>
</template>

<script>
import homeHeader from './components/homeHeader' //组件名不能与html标签有重
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
