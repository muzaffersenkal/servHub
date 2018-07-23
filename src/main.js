// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  { store } from './store/store'
import firebase from 'firebase'
import Alert from './components/shared/Alert.vue'

Vue.config.devtools = true;
Vue.config.productionTip = false
Vue.component('app-alert',Alert )

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDA1jFrQEsDEzmwIjULIAjH0NjgShu8L_s",
    authDomain: "servhub-4490c.firebaseapp.com",
    databaseURL: "https://servhub-4490c.firebaseio.com",
    projectId: "servhub-4490c",
    storageBucket: "",
    messagingSenderId: "786956021485"
  };
  


/* eslint-disable no-new */
    new Vue({
      el: '#app',
      router,
      store,
      components: { App },
      template: '<App/>',
      created(){
        firebase.initializeApp(config);
        firebase.auth().onAuthStateChanged((user) =>{
      
          if(user !=null && user != undefined){
            console.log('dispatch ediliyor')
            this.$store.dispatch('autoSignIn',user)
          }
          
        });
        
      }

    

});

