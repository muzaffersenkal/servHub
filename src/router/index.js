import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/auth/Login'
import Register from '@/components/auth/Register'
import CreateCompany from '@/components/company/CreateCompany'
import firebase from 'firebase'
import AuthGuard  from './auth-guard'
Vue.use(Router)

let  router = new Router({
  routes: [
    {
      path:'*',
      redirect: '/login'
    },
    {
      path:'/',
      redirect: '/login'
    },
    {
      path: '/',
      name: 'home',
      component: HelloWorld,
      beforeEnter: AuthGuard
      
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
    ,
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/createCompany',
      name: 'CreateCompany',
      component: CreateCompany,
      beforeEnter: AuthGuard
     
    }
  ],
  mode:'history'
});


export default router;