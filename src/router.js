import Vue from 'vue'
import Router from 'vue-router'
import LoginComponent from "./views/login.vue"
import SecureComponent from "./views/secure.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
   
    {
      path:'/inicio',
      name:'inicio',
      component: () => import(/* webpackChunkName: "inicio" */ './views/Inicio.vue')

    },
    {
      path:'/jardin',
      name:'jardin',
      component: () => import(/* webpackChunkName: "jardin" */ './views/Jardin.vue')

    },
    {
      path:'/escolar',
      name:'escolar',
      component: () => import(/* webpackChunkName: "escolar" */ './views/Escolar.vue')

    },
    {
      path:'/construccion',
      name:'construccion',
      component: () => import(/* webpackChunkName: "construccion" */ './views/Construccion.vue')

    },
 
    {
      path:'/Registrarse',
      name:'Registrarse',
      component: () => import(/* webpackChunkName: "Registrarse" */ './views/Registrarse.vue')

    },
    {
      path: '/',
      redirect: {
          name: "login"
      }
  },
  {
      path: "/login",
      name: "login",
      component: LoginComponent
  },
  {
      path: "/secure",
      name: "secure",
      component: SecureComponent
  }
  ]
})
