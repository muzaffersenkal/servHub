<template>
    <div class="register">
        <h3>Hesap Oluştur</h3>
        <input type="text" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <button v-on:click="register">Kayıt Ol</button>
        <span>geri dön ve <router-link to='/login'>giriş yap</router-link> </span>
        
                


    </div>
</template>

<script>
import firebase from 'firebase'
    export default {
        name: 'register',
        data : function(){
            return {
                email : '',
                password : ''
            }
        },
        methods: {
            register: function(){
                firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(
                    (user) => {
                        alert('Hesap Oluşturuldu')
                          this.$router.push({name:'home'})
                    },
                    (err) => {
                        alert('Bi sorun oluştu' + err.message)
                    }
                );
            }
        }
    }

</script>

<style scoped>
    .register {
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
    span {
        display:block;
        margin-top:20px;
        font-size:11px
    }

</style>