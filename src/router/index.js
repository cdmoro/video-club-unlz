import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Registro from '../views/Registro.vue'
import MisPacks from '../views/MisPacks.vue'
import ComprarPack from '../views/ComprarPack.vue'
import MisPublicidades from '../views/MisPublicidades.vue'
import PanelDeControl from '../views/PanelDeControl.vue'
import Informacion from '../views/Informacion.vue'
import Search from '../views/Search.vue'
import Configuracion from '../views/Configuracion.vue'
import PaginaNoEncontrada from '../views/PaginaNoEncontrada.vue'

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
    path: '/comprar-pack',
    name: 'ComprarPack',
    component: ComprarPack
  },
  {
    path: '/mis-publicidades',
    name: 'Mis publicidades',
    component: MisPublicidades
  },
  {
    path: '/panel-de-control',
    name: 'Panel de control',
    component: PanelDeControl
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
  {
    path: '/configuracion',
    name: 'Configuración',
    component: Configuracion
  },
  {
    path: '*',
    name: 'Página no encontrada',
    component: PaginaNoEncontrada
  }
]

const router = new VueRouter({
  routes
})

export default router
