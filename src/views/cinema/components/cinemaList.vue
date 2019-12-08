<template>
  <div id="cinema-list">
    <div class="content">
      <div class="item" v-for="(item, index) in cinemas" :key="index">
        <div class="info">
          <h1>
            {{ item.nm }}<span class="price">{{ item.sellPrice }}</span
            ><span>元起</span>
          </h1>
          <p class="location">
            {{ item.addr }}
          </p>
        </div>
        <div class="distance">{{ item.distance }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { cinemaList } from '@/api/cinemaList'
export default {
  name: 'cinemaList',
  data: function() {
    return {
      cinemas: []
    }
  },
  mounted() {
    cinemaList()
      .then(res => {
        console.log(res)
        this.cinemas = res.data.cinemas
      })
      .catch(err => {
        console.log(err)
      })
  },
  methods: {}
}
</script>

<style scoped lang="stylus">
@import '~@/assets/css/mainColor'
#cinema-list
  padding-bottom 48px
  .content
    .item
      display flex
      margin 10px
      position relative
      &:after
        content ''
        position absolute
        width 96vw
        background #ccc
        height 1px
        bottom -10px
        left -1%
        transform scaleY(0.5)
      .distance
        width 30%
        display flex
        justify-content center
        align-items center
        font-size 13px
        color $fontColor
      .info
        width 70%
        h1,p
          margin 10px 0
          font-family PingFangSC-Regular,Hiragino Sans GB,sans-serif
          overflow hidden
          text-overflow ellipsis //字体溢出显示省略号...
          white-space nowrap // 字体溢出不换行
        h1
          font-size 16px
          font-weight normal
          .price
            font-size 18px
            color $btnColor
            margin 0 5px
          span
            font-size 11px
            color $btnColor
        p
          font-size 13px
          color $fontColor
</style>
