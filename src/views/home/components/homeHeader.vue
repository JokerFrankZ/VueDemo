<template>
  <div class="nav">
    <slot>
      <svg @click="getBack" class="icon" aria-hidden="true">
        <use xlink:href="#iconback"></use>
      </svg>
    </slot>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'homeHeader',
  data: function() {
    return {}
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    getBack() {
      return this.$router.back()
      // 返回上一页
    }
  }
}
</script>

<style scoped lang="stylus">
.nav
  height 50px
  background #e54847
  display flex
  justify-content center
  align-items center
  position relative
  h1
    margin 0
    color #fff
    font-weight 400
    font-size 18px
  .icon
    position absolute
    width 1.5em
    height 1.5em
    vertical-align -0.15em
    fill #fff
    overflow hidden
    left 5%
</style>
