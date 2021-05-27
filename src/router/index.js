import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Registro from '../views/Registro.vue'
import MisPacks from '../views/MisPacks.vue'
import MisPublicidades from '../views/MisPublicidades.vue'
import Informacion from '../views/Informacion.vue'
import Search from '../views/Search.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/registro',
    name: 'Registro',
    component: Registro
  },
  {
    path: '/mis-packs',
    name: 'Mis packs',
    component: MisPacks
  },
  {
    path: '/mis-publicidades',
    name: 'Mis publicidades',
    component: MisPublicidades
  },
  {
    path: '/informacion',
    name: 'Información',
    component: Informacion
  },
  {
    path: '/search',
    name: 'Buscar',
    component: Search
  },
]

const router = new VueRouter({
  routes
})

export default router
