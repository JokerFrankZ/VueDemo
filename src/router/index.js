import Vue from 'vue'
import VueRouter from 'vue-router'
const home = () => import('@/views/home/home')
const cinema = () => import('@/views/cinema/cinema')
const profile = () => import('@/views/profile/profile')
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
    component: home,
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
  },
  {
    path: '/cinema',
    component: cinema,
    meta: {
      title: '影院'
    }
  },
  {
    path: '/profile',
    component: profile,
    meta: {
      title: '我的'
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
