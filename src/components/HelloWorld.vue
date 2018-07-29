<template>
  <ion-app>
    <ion-page class="show-page">
      <ion-header>
        <ion-toolbar>
           
          <ion-title>Ionic 4 + Vue Application
            <button v-on:click="logout">Çıkış Yap</button> 
             
            </ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="content" padding>
          <ion-list>
            <ion-item v-for="item of items" v-bind:key="item.id">
              <ion-label full>{{ item.name}}</ion-label>
              

            </ion-item>
          </ion-list>
            <p>{{ count }}</p>
  <p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </p>
  <router-link to='/createCompany'>Şirket Oluştur</router-link>
            
      </ion-content>
    </ion-page>
  
  </ion-app>
  
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'App',
  data () {
    return {
    
    }
  },  
    computed: {
    count () {
	    return this.$store.state.count
    },
    items (){
        return this.$store.getters.companies
    } 
  },
  methods: {
    increment () {
      this.$store.commit('increment')
    },
    decrement () {
    	this.$store.commit('decrement')
    },
    logout(){
      firebase.auth().signOut().then(()=> {
          this.$router.replace('login')
    
      })
    }
  },
  created (){
    this.$store.dispatch('fetchCompanies').then(()=>{

    });
  }
}
</script>
