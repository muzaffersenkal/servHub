<template>
    <div class="login">
        <h3>Giriş Yap</h3>
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
        methods: {
           // login:function(){
             //   this.$router.replace('/')
           // }

           login: function(){
               firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(
                    (user) => {
                      
                       
                       this.$router.push({name:'home'})
                   },
                   (err )=> {
                       alert('giriş Başarısız tekrar dene')
                       this.email = ''
                       this.password =''
                   }
               );
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