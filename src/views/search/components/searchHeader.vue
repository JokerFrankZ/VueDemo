<template>
  <div id="search-header">
    <nav>
      <div class="search">
        <svg class="icon" aria-hidden="true" slot="item-icon">
          <use xlink:href="#iconsousuo"></use>
        </svg>
        <input
          type="text"
          placeholder="搜电影"
          @change="getMoviesList"
          v-model="inputData"
        />
      </div>
      <span class="cancel" @click="goTo('/home')">取消</span>
    </nav>
  </div>
</template>

<script>
import service from '@/utils/request.js'
export default {
  name: 'searchHeader',
  data: function() {
    return {
      inputData: null,
      moviesList: [],
      total: 0,
      moivesImgUrl: []
    }
  },
  updated() {
    if (this.moivesImgUrl.length > 1000) {
      // 为了防止数组过大，大于1000条数据就刷新
      location.reload()
    }
  },
  methods: {
    getMoviesList() {
      service
        .request({
          method: 'get',
          url: `/api/ajax/search?kw=${this.inputData}&cityId=92`
        })
        .then(res => {
          console.log(res)
          this.moviesList = res.data.movies.list
          this.total = res.data.movies.total
          for (let i in res.data.movies.list) {
            // 用push会有覆盖的问题，所以使用splice，每次从数组的前面开始添加
            this.moivesImgUrl.splice(
              0,
              0,
              res.data.movies.list[i].img.replace(/w.h/g, '128.180')
            )
          }
          this.$emit(
            'getListAndTotal',
            this.moviesList,
            this.total,
            this.moivesImgUrl
          )
        })
        .catch(err => {
          console.log(err)
        })
    },
    goTo(url) {
      this.$router.push(url)
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~@/assets/css/mainColor'
#search-header
  position fixed
  top 50px
  left 0
  z-index 999
  nav
    width 100vw
    height 47px
    background $searchBg
    display flex
    justify-content flex-start
    align-items center
    font-family PingFangSC-Regular,Hiragino Sans GB,sans-serif
    border-bottom 1px solid #e5e5e5
    .search
      position relative
      width 75%
      height 60%
      margin-left 10px
      .icon
        position absolute
        width 15px
        height 15px
        fill #b1b1b1
        top 50%
        left 5px
        transform translate(0,-40%)
      input
        height 100%
        width 100%
        border 1px solid #e6e6e6
        border-radius 5px
        outline none
        font-size 13px
        color #333
        padding-left 25px
    .cancel
      color $btnColor
      margin-left 40px
</style>
