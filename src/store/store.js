import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs';
import firebase from 'firebase'
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
      count: 0,
      user: null
    },
    getters: {
        user(state){
            return state.user
        }

    },
    mutations: {
        increment: state => state.count++,
        decrement: state => state.count--,
        setUser(state , payload){
            state.user = payload
        }
    },
    actions: {
        signUserUp({commit} , payload){
            firebase.auth().createUserWithEmailAndPassword(payload.email,payload.password)
            .then(
                (user) => {
                    alert('Hesap Oluşturuldu')
                    const newUser = {
                        id: user.uid
                    }
                    commit('setUser',newUser)
                   
                },
                (err) => {
                    alert('Bi sorun oluştu' + err.message)
                }
            ).catch(
                error =>  {
                    console.log(error)
                }
            );
        },

        signUserIn({commit} ,  payload){
            firebase.auth().signInWithEmailAndPassword(payload.email,payload.password)
            .then(
                (user) => {
                    alert('Giriş Yapıldı')
                    const newUser = {
                        id: user.uid
                    }
                    commit('setUser',newUser)
                   
               },
               (err )=> {
                   alert('giriş Başarısız tekrar dene')
                  
               }
           ).catch(
            error =>  {
                console.log(error)
            }
            );
        }
    }

})