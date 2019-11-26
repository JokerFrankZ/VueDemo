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
      return this.$route.path == this.path
      // 判断激活状态的path是否等于传入的path
    },
    activeStyle() {
      return this.isActive ? { active: this.isActive } : {}
      // 如果isActive()为true则激活active否则返回空对象
    }
  },
  methods: {
    clickItem() {
      this.$router.push(this.path)
      // 点击后跳转，path是父组件传进来的
    }
  }
}
</script>

<style scoped lang="stylus">
#tabBarItem
  div
    display flex
    justify-content center
    span
      font-family PingFangSC-Regular,Hiragino Sans GB,sans-serif
      font-size 12px
#tabBarItem
  #item-icon
    .icon
      width 25px
      height 25px
.active
  color #e54847
  fill #e54847
</style>
