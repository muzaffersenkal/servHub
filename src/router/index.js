import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/auth/Login'
import Register from '@/components/auth/Register'
import firebase from 'firebase'

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
      meta: {
        requiresAuth: true
      }
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
    }
  ]
});

router.beforeEach((to, from, next ) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if(requiresAuth &&  !currentUser) next('login')
  else if(!requiresAuth && currentUser) next({name:'home'})
  else next()
});

export default router;