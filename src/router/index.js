import Vue from 'vue'
import VueRouter from 'vue-router'
import MenClothing from "@/components/MenClothing";
import MainContent from "@/components/MainContent";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'MainContent',
    component: MainContent
  },
  {
    path: '/men-clothing',
    name: 'MenClothing',
    component: MenClothing
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
