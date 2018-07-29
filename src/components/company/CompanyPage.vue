<template>
  <ion-app>
    <ion-page class="show-page">
      <ion-header>
        <ion-toolbar>
           
          <ion-title>Company Page
            <button v-on:click="logout">Çıkış Yap</button> 
             
            </ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="content" padding>
          
  
            
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
