import Vue from 'vue'
import VueRouter from 'vue-router'
import FilmsView from '@/views/films/FilmsView'

Vue.use(VueRouter) // 注册组件

const routes = [{
  path: '/films',
  name: 'films',
  component: FilmsView, 
  children: [{
    path: '/films/nowplaying',
    component: () => import('@/views/films/NowPlaying.vue')
  },
  {
    path: '/films/onway',
    component: () => import('@/views/films/OnWay.vue')
  },
  {
    name: 'onway',
    path: '/films',
    redirect: '/films/nowplaying'
  }]
},
{
  name: 'filmDetail',
  path: '/films/detail/:filmId', // 配置动态路由
  component: () => import('@/views/films/FilmDetail.vue')
},
{
  path: '/login',
  component: () => import('@/views/LoginView.vue'), // 路由懒加载
  props: route => ({ from: route.query.from })
},
{
  path: '/camera',
  name: 'camera',
  component: () => import('@/views/CameraView.vue')// 路由懒加载
},
{
  path: '/center',
  name: 'center',
  component: () => import('@/views/CenterView.vue'), // 路由懒加载
  meta: {
    needToken: true
  },
  beforeEnter: (to, from, next) => {

    // 判断是否包含了token
    if (localStorage.getItem('token')) {
      next(true)
    } else {
      // 拼接路径
      // next(`/login?from=${to.fullPath}`)
      next({
        path: '/login',
        query: {
          from: to.fullPath
        }
      })
    }
  }
},
{
  // 重定向, *表示当没有匹配到的时候，最后一个匹配规则
  path: '*',
  redirect: '/films'
}
]

/* vue支持两种路径模式, history: 则没有#号; hash为有#号，也是默认模式 */
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 添加全局拦截(守卫)
router.beforeEach((to, from, next) => {
  console.log('to', to, from)
  // 判断目标路由是否需要登录
  let meta = to.meta;
  if (meta && meta.needToken) {
    // 判断是否包含了token
    if (localStorage.getItem('token')) {
      next(true)
    } else {
      // 拼接路径
      // next(`/login?from=${to.fullPath}`)
      next({
        path: '/login',
        query: {
          from: to.fullPath
        }
      })
    }
  } else {
    return next(true);
  }
})

export default router
