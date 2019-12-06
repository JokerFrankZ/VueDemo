<template>
  <div id="homeHeader">
    <ul>
      <li>
        城市
        <svg class="icon" aria-hidden="true" slot="item-icon">
          <use xlink:href="#icondaosanjiao"></use>
        </svg>
      </li>
      <li
        @click="goTo('/home/hotMoviesList')"
        :class="{ active: '/home/hotMoviesList' == $route.path }"
      >
        正在热映
      </li>
      <li
        @click="goTo('/home/comingMoviesList')"
        :class="{ active: '/home/comingMoviesList' == $route.path }"
      >
        即将上映
      </li>
      <li>
        <svg class="icon" aria-hidden="true" slot="item-icon">
          <use xlink:href="#iconsousuo"></use>
        </svg>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'homeHeader',
  data: function() {
    return {}
  },
  methods: {
    goTo(url) {
      this.$router.push(url)
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~@/assets/css/mainColor'
#homeHeader
  width 100vw
  height 44px
  border-bottom  1px solid $borderColor
  ul
    list-style none
    padding 0
    margin 0
    display flex
    height 44px
    li
      flex 1
      display flex
      justify-content center
      align-items center
      font-weight bold
      color $fontColor
      border-bottom  none
      position relative
      &:first-child
        font-weight 400
        .icon
          margin-left 2px
          fill #999
          width 10px
          height 10px
      &:last-child
      &:first-child
        &:hover
          color $fontColor
        &:hover:before
          width: 0;
      &:hover
        color $activeColor
      &:before//使用before在li底下加一条线
        content ""
        position absolute
        left 50%
        bottom -1px
        width 0
        height 2px
        background $activeColor
        transition all .3s
      &:hover:before//通过hover伪类来修改宽度实现过度
        width: 100%;
        left: 0;
        right: 0;
      .icon
        width 20px
        height 20px
        margin-left 40px
        fill $activeColor
  .active
    color $activeColor
    &:before
        content ""
        position absolute
        bottom -1px
        width 0
        height 2px
        background $activeColor
        width: 100%;
        left: 0;
        right: 0;
</style>
