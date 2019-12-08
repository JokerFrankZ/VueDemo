<template>
  <div id="show-search-abs">
    <div class="content">
      <div class="title" v-if="showTitle">
        <P>电影/电视剧/综艺</P>
      </div>
      <div class="item" v-for="(item, index) in list" :key="index">
        <figure>
          <img :src="moivesImgUrl[index]" alt="" />
        </figure>
        <div class="abstract">
          <h1>{{ item.nm }}</h1>
          <p class="info">{{ item.enm }}</p>
          <p class="category">{{ item.cat }}</p>
          <p class="date">{{ item.rt }}</p>
        </div>
        <p class="score" v-if="item.sc !== 0">{{ item.sc }}<span>分</span></p>
        <p class="null" v-else>暂无评分</p>
      </div>
      <div v-if="showTitle" class="total">查看全部{{ total }}部影视剧</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'showSearchAbs',
  props: {
    list: {
      type: Array,
      default() {
        return ''
      }
    },
    total: {
      type: Number
    },
    moivesImgUrl: {
      type: Array
    }
  },
  data: function() {
    return {
      showTitle: false
    }
  },
  updated() {
    if (this.list === '') {
      this.showTitle = false
    } else {
      this.showTitle = true
    }
  },
  methods: {}
}
</script>

<style scoped lang="stylus">
@import '~@/assets/css/mainColor'
#show-search-abs
  height 100vh
  padding-top 47px
  background $searchBg
  padding-bottom 48px
  .content
    background #fff
    overflow hidden
    .title
      width 100%
      height 40px
      line-height 40px
      border-top 1px solid #e5e5e5
      border-bottom 1px solid #e5e5e5
      p
        text-align left
        margin 0
        padding-left 20px
        font-size 15px
        color #999
    .item
      width 100%
      display flex
      justify-content space-around
      align-items center
      margin  20px 0 20px 10px
      height 90px
      position relative
      &:after // 分割线
        content ''
        position absolute
        width 88%
        right 8%
        height 1px
        background #ccc
        bottom -20px
        transform scaleY(0.5)
      .score
      .null
        width 20%
        font-size 16px
        color #fa0
        span
          font-size 12px
      .null
        color #999
        font-size 14px
      figure
        height 90px
        margin 0
        display flex
        align-items center
        img
          width 64px
          height 90px
      .abstract
        display flex
        flex-direction column
        height 100%
        justify-content space-between
        font-family PingFangSC-Regular,Hiragino Sans GB,sans-serif
        h1,p
          margin 0
          width 217px // 要设定死宽度
          overflow hidden
          text-overflow ellipsis //字体溢出显示省略号...
          white-space nowrap // 字体溢出不换行
        p
          font-size 13px
          color $fontColor
          span
            color #faaf00
            font-size 15px
            font-weight 700
            padding-left 5px
        h1
          font-size 17px
    .total
      width 100%
      height 44px
      color $activeColor
      line-height 44px
      text-align center
</style>
