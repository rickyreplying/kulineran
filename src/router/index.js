import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FoodView from '../views/FoodView.vue';
import FoodDetailView from '../views/FoodDetailView.vue';
import KeranjangView from '../views/KeranjangView.vue';
import PesananSukses from '../views/PesananSukses.vue';
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/foods',
    name: 'Food',
    component: FoodView
  },
  {
    path: '/foods/:id',
    name: 'Food Detail',
    component: FoodDetailView
  },
  {
    path: '/keranjang',
    name: 'Keranjang Makanan',
    component: KeranjangView
  },
  {
    path: '/pesanan-sukses',
    name: 'Pesanan Sukses!',
    component: PesananSukses
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  
]

const router = new VueRouter({
  routes
})

export default router
