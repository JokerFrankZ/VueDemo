<template>
  <div id="cinema">
    <cinema-list></cinema-list>
  </div>
</template>

<script>
import cinemaList from '@/views/cinema/components/cinemaList'
export default {
  name: 'cinema',
  data: function() {
    return {}
  },
  components: {
    cinemaList
  },
  methods: {}
}
</script>

<style scoped lang="stylus">
#cinema
  padding-top 50px
</style>
