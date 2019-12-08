<template>
  <div id="hot-movies-list">
    <div class="content">
      <div class="item" v-for="(item, index) in moivesInfo" :key="index">
        <figure>
          <img :src="moivesImgUrl[index]" alt="" />
        </figure>
        <div class="abstract">
          <h1>{{ item.nm }}</h1>
          <p v-if="item.sc == 0">
            <span>{{ item.wish }}</span>
            人想看
          </p>
          <p class="score" v-else>
            观众评<span>{{ item.sc }}</span>
          </p>
          <p class="actor">主演：{{ item.star }}</p>
          <p class="info">{{ item.showInfo }}</p>
        </div>
        <div class="btn">
          <button>购票</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { hotMoviesList } from '@/api/hotMoviesList'
export default {
  name: 'hotMoviesList',
  data: function() {
    return {
      moivesImgUrl: [],
      moivesInfo: []
    }
  },
  mounted() {
    hotMoviesList()
      .then(res => {
        console.log(res)
        this.moivesInfo = res.data.coming
        for (let i in res.data.coming) {
          this.moivesImgUrl.push(
            res.data.coming[i].img.replace(/w.h/g, '128.180')
          )
        }
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
#hot-movies-list
  width 100vw
  padding-top 94px // 顶部导航栏，加上home nav
  padding-bottom 48px // 底部导航栏
  overflow hidden
  .content
    width 100%
    display flex
    flex-direction column
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
        h1,p
          font-family PingFangSC-Regular,Hiragino Sans GB,sans-serif
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
      .btn
        display flex
        align-items center
        height 100%
        width 20%
        button
          margin-left 10px
          background $btnColor
          border-radius 4px
          border none
          color $fontWhite
          height 27px
          width 47px
          font-size 12px
          outline none
</style>
