<template>
  <div id="tabBarItem" @click="clickItem" :class="activeStyle">
    <div id="item-icon" :class="activeStyle">
      <slot name="item-icon"></slot>
    </div>
    <div id="item-text">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabBarItem',
  data: function() {
    return {}
  },
  props: {
    path: {
      type: String
    }
  },
  computed: {
    isActive() {
      // return this.$route.path.indexOf(this.path) !== -1
      // 判断处于激活状态的path等不等于这个item本身的path
      // indexOf是判断包不包含，如果不包含就返回-1
      return !this.$route.path.indexOf(this.path)
      // 判断激活状态的path是否包含传入的path
    },
    activeStyle() {
      return this.isActive ? { active: this.isActive } : {}
      // 如果isActive()为true则激活active否则返回空对象
    }
  },
  methods: {
    clickItem() {
      if (
        this.$route.path === this.path ||
        this.$route.path === `${this.path}/hotMoviesList` //用于解决重复点击home带来的报错
      ) {
        return
      }
      // 解决双击item跳转路由报错，当激活的路由path等有item的path时不跳转
      this.$router.replace(this.path)
      // 点击后跳转，path是父组件传进来的,replace是无法后退
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~@/assets/css/mainColor.styl'
#tabBarItem
  width 100vw
  // 占满整个item
  div
    display flex
    justify-content center
    span
      font-family PingFangSC-Regular,Hiragino Sans GB,sans-serif
      // 仿照猫眼电影的字体
      font-size 12px
#tabBarItem
  #item-icon
    .icon
      width 25px
      height 25px
.active
  color $activeColor
  fill $activeColor
</style>
