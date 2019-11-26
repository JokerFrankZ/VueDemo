<template>
  <div id="tabBar">
    <slot> </slot>
  </div>
</template>

<script>
export default {
  name: 'tabBar',
  data: function() {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="stylus">
#tabBar
  background #ffffff
  width 100vw
  height 48px
  position absolute
  bottom 0
  display flex
  justify-content space-around
  align-items center
  border-top .5px solid #d8d8d8
</style>
