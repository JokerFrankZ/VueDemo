import Vue from 'vue'
import VueRouter from 'vue-router'
const index = () => import('@/views/index')
const home = () => import('@/views/home/home')
Vue.use(VueRouter)

/**
 * 重写路由的push方法--->这个是vue-cli4.x以上的坑，不然的话，你是跳转不了的
 */
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    component: index,
    name: 'index',
    meta: {
      title: '心眼'
    }
  },
  {
    path: '/home',
    component: home,
    meta: {
      title: '心眼电影'
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
})

export default router
