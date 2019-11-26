<template>
  <div>
    <main-header title="心眼电影">
      <div v-if="showBcak"></div>
    </main-header>
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import mainHeader from '@/components/content/mainHeader' //组件名不能与html标签有重
import mainTabBar from '@/components/content/mainTabBar'
export default {
  name: 'index',
  data: function() {
    return {}
  },
  computed: {
    showBcak() {
      return this.$route.path == '/home'
      // 隐藏home页面的返回按钮
    }
  },
  components: {
    mainHeader,
    mainTabBar
  },
  methods: {}
}
</script>

<style scoped></style>
