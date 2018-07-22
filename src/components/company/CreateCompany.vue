<template>
    <div class="register">
        <h3>Şirket Oluştur</h3>
        <input type="text" v-model="name" placeholder="Şirket Adı"><br>
        <textarea v-model="description" placeholder="Şirket Açıklaması girin" ></textarea>
       <button v-on:click="createCompany">Şirket Oluştur</button>
        
                


    </div>
</template>

<script>

    export default {
        name: 'createcompany',
        data : function(){
            return {
                name:'',
                description:''
                
            }
        },
        methods: {
            createCompany: function(){
                this.$store.dispatch('createCompany',{name:this.name, description: this.description})
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
    textarea {
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