<template>
  <ion-app>
    <ion-page class="show-page">
      <ion-header>
        <ion-toolbar>
           
          <ion-title>
            <button v-on:click="logout">Çıkış Yap</button> 
              {{ company["details"].name }}
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
    company (){
        return this.$store.getters.company
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
    this.id = this.$route.params.id;
    this.$store.dispatch('fetchCompanyDetail',this.id).then(()=>{
      console.log("detay sayfası alındı")
    });
  }
}
</script>
