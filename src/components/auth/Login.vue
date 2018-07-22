<template>
    <div class="login">
        <h3>Giriş Yap</h3>
        <div v-if="error">
        <app-alert @dismissed="onDismissed" :text="error.message"></app-alert></div>
        <input type="text" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <button v-on:click='login'>Giriş Yap</button>
        <p>Hesabın yok mu ? Hesap <router-link to='/register'>oluştur</router-link></p>
                


    </div>
</template>

<script>
import firebase from 'firebase'
    export default {
        name: 'login',
        data : function(){
            return {
                email : '',
                password : ''
            }
        },
        computed: {
            user(){
                return this.$store.getters.user
            },
            error(){
                return this.$store.getters.error
            }

        },
        watch:{
            user(value){
                if(value != null && value != undefined){
                     this.$router.push({name:'home'})
                }
            }
        },
        methods: {
           // login:function(){
             //   this.$router.replace('/')
           // }
           onDismissed(){
               this.$store.dispatch('clearError')
               console.log("dismissed")
           },

           login: function(){
                   this.$store.dispatch('signUserIn',{email:this.email, password: this.password})
            
           }
        }
    }

</script>

<style scoped>
    .login {
        margin-top:40px;

    }

    input {
        margin: 10px 0;
        width:20%;
        padding:15px
    }
    button {
        margin-top:20px;
        width:10%;
        cursor:pointer
    }
    p {
        margin-top:40px;
        font-size:13px
    }
    p a {
        text-decoration:underline;
        cursor:pointer;
    }

</style>