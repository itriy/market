import Vue from 'vue'
import Router from 'vue-router'
import MainView from './views/MainView'
import ItemView from './components/ItemView'
import Catalog from './components/Catalog/'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainView',
      component: MainView,
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
          path:'/catalog/:slug',
          component:ItemView,
          name: 'ItemView',
          props: true
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('./components/About')
        }
      ]
    }
  ]
})