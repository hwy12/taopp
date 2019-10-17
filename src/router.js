import Vue from 'vue'
import Router from 'vue-router'
// 一级路由导入
import Home from './views/home/index.vue' // 首页
import City from './views/city/index.vue' // 城市选择页
import Film from './views/film/index.vue' // 电影详情
import Cinema from './views/cinema/index.vue' // 影院详情
import Register from './views/register/index.vue' // 注册页
import Login from './views/login/index.vue' // 登录页
import Money from './views/money/index.vue' // 钱包余额
import Movie from './views/movie/index.vue' // 电影影院选择
import Seat from './views/seat/index.vue' // 选座购票

// 二级路由导入
import Films from './views/home/films.vue' // 电影列表页
import Cinemas from './views/home/cinemas.vue' // 影院列表页
import Center from './views/home/center.vue' // 个人中心

// 公共组件导入
import cinemasSarch from './component/cinemasSarch.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: 'films',
          component: Films
        },
        {
          path: 'cinemas',
          component: Cinemas,
          children: [
            {
              path: '',
              component: cinemasSarch
            }
          ]
        },
        {
          path: 'center',
          component: Center
        },
        {
          path: '',
          component: Films
        }
      ]
    },
    {
      path: '/city',
      component: City
    },
    {
      path: '/film',
      component: Film
    },
    {
      path: '/:id/cinema',
      component: Cinema
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/money',
      component: Money
    },
    {
      path: '/movie',
      component: Movie
    },
    {
      path: '/seat',
      component: Seat
    }
  ]
})
export default router
