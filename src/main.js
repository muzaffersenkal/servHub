// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  { store } from './store/store'
Vue.config.productionTip = false
import firebase from 'firebase'

let app;

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDA1jFrQEsDEzmwIjULIAjH0NjgShu8L_s",
    authDomain: "servhub-4490c.firebaseapp.com",
    databaseURL: "https://servhub-4490c.firebaseio.com",
    projectId: "servhub-4490c",
    storageBucket: "",
    messagingSenderId: "786956021485"
  };
  firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user){
  if(!app){
/* eslint-disable no-new */
    app =  new Vue({
      el: '#app',
      router,
      store,
      components: { App },
      template: '<App/>'
    })
  }

});

