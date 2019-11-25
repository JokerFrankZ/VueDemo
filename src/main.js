import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css' //引入格式化默认css文件
import './assets/css/border.css' //用于解决1px边框问题
// import fastClick from 'fastclick' //引入第三方库，用于解决移动端300ms的点击延迟
import '@/common/iconfont'
Vue.config.productionTip = false
// fastClick.attach(document.body) //将他绑定到body上

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
