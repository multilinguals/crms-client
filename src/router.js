import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import(/* webpackChunkName: "about" */ './views/home/Index')
    },
    {
      path: '/history',
      name: 'history',
      component: () => import(/* webpackChunkName: "about" */ './views/home/History')
    },
    {
      path: '/my',
      name: 'my',
      component: () => import(/* webpackChunkName: "about" */ './views/home/My')
    },
    {
      path: '/group/create',
      name: 'group_create',
      component: () => import(/* webpackChunkName: "about" */ './views/group/Create')
    },
    {
      path: '/group/detail/:id',
      name: 'group_detail',
      component: () => import(/* webpackChunkName: "about" */ './views/group/Detail')
    }
  ]
})
