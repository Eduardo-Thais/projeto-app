import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'BuscaCep',
    component: () => import(/* webpackChunkName: "buscaCep" */ '../views/BuscaCep.vue')
  },
  {
    path: '/listacep',
    name: 'listaCep',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "listaCep" */ '../views/ListaCep.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
