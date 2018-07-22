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

    export default {
        name: 'register',
        data : function(){
            return {
                email : '',
                password : ''
            }
        },
        computed: {
            user(){
                return this.$store.getters.user
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
            register: function(){
                this.$store.dispatch('signUserUp',{email:this.email, password: this.password})
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