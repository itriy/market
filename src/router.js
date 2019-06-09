import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
import ItemView from './views/ItemView'
import Catalog from './components/Catalog/'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/',
          name: 'Catalog',
          component: Catalog,
        },
        {
          path: '/catalog',
          name: 'Catalog',
          component: Catalog,
        },
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }
      ]
    },
    {
      path:'/catalog/:slug',
      component:ItemView,
      name: 'ItemView'
    }
  ]
})