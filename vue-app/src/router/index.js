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
  path: '/camera',
  name: 'camera',
  component: () => import('@/views/CameraView.vue')
},
{
  path: '/center',
  name: 'center',
  component: () => import('@/views/CenterView.vue')
},
{
  // 重定向, *表示当没有匹配到的时候，最后一个匹配规则
  path: '*',
  redirect: '/films'
}

]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
