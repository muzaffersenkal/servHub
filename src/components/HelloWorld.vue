<template>
  <ion-app>
    <ion-page class="show-page">
      <ion-header>
        <ion-toolbar>
          <ion-title>Ionic 4 + Vue Application<button v-on:click="logout">Çıkış Yap</button> </ion-title>
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
      items: [{id: 0, name:'Ahmed'},{id:1, name: 'Naima'}]
    }
  },  
    computed: {
    count () {
	    return this.$store.state.count
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
  }
}
</script>
