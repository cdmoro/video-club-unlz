import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Registro from '../views/Registro.vue'
import RecuperarPassword from '../views/RecuperarPassword.vue'
import ComprarPack from '../views/ComprarPack.vue'
import PublicarPublicidad from '../views/PublicarPublicidad.vue'
import About from '../views/About.vue'

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
    path: '/recuperar-contraseña',
    name: 'Recuperar contraseña',
    component: RecuperarPassword
  },
  {
    path: '/comprar-pack',
    name: 'Comprar pack',
    component: ComprarPack
  },
  {
    path: '/publicar-publicidad',
    name: 'Publicar publicida',
    component: PublicarPublicidad
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  routes
})

export default router
