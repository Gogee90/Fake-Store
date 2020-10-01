import Vue from 'vue'
import VueRouter from 'vue-router'
import MenClothing from "@/components/MenClothing";
import MainContent from "@/components/MainContent";
import Product from "@/components/Product";
import DeleteProduct from "@/components/DeleteProduct";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'MainContent',
    component: MainContent
  },
  {
    path: '/:category/',
    name: 'MenClothing',
    component: MenClothing
  },
  {
    path: '/:category/:product_id',
    name: 'Product',
    component: Product
  },
  {
    path: '/:category/:product_id/delete/',
    name: 'DeleteProduct',
    component: DeleteProduct
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
