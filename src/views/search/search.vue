<template>
  <div id="search">
    <search-header
      @getListAndTotal="getMoviesListAndTotal(arguments)"
    ></search-header>
    <show-search-abs
      :list="moviesList"
      :total="total"
      :moivesImgUrl="moivesImgUrl"
    ></show-search-abs>
  </div>
</template>

<script>
import searchHeader from './components/searchHeader'
import showSearchAbs from './components/showSearchAbs'
export default {
  name: 'search',
  data: function() {
    return {
      moviesList: [],
      total: 0,
      moivesImgUrl: []
    }
  },
  components: {
    searchHeader,
    showSearchAbs
  },
  methods: {
    getMoviesListAndTotal(data) {
      ;(this.moviesList = data[0]),
        (this.total = data[1]),
        (this.moivesImgUrl = data[2])
    }
  }
}
</script>

<style scoped lang="stylus">
#search
  padding-top 50px
</style>
