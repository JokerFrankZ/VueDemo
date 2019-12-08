<template>
  <div>
    <main-header :title="title">
      <div v-if="showBack()"></div>
    </main-header>
    <keep-alive exclude="search">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import mainHeader from '@/components/content/mainHeader' //组件名不能与html标签有重
import mainTabBar from '@/components/content/mainTabBar'
export default {
  name: 'index',
  data: function() {
    return {
      title: '心眼'
    }
  },
  computed: {},
  components: {
    mainHeader,
    mainTabBar
  },
  methods: {
    showBack() {
      if (
        this.$route.path == '/home' ||
        this.$route.path == '/cinema' ||
        this.$route.path == '/profile'
      ) {
        return true
      } else {
        return false
      }
      // 隐藏home页面和cinema页面的返回按钮
    }
  },
  updated() {
    // 通过使用生命周期函数检测页面的更新，把title实时传到mainHeader上
    this.title = this.$route.matched[0].meta.title
  }
}
</script>

<style scoped></style>
