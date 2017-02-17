import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
// 豆瓣电影
import List from 'movie/List'
import Detail from 'movie/Detail'

// 豆瓣图书

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  'linkActiveClass': 'active',
  routes: [
    {
      path: '/movie/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/movie/coming-soon',
      name: '即将上映',
      component: List
    },
    {
      path: '/movie/top250',
      name: 'top250',
      component: List
    },
    {
      path: '/movie/weekly',
      name: '口碑傍',
      component: List
    },
    {
      path: '/movie/us-box',
      name: '北美票房榜',
      component: List
    },
    {
      path: '/movie/new-movies',
      name: '新片榜',
      component: List
    }
  ]
})
