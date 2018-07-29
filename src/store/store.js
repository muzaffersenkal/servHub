import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs';
import * as firebase from 'firebase'
import service from '../services/service';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        companies:[],
        count: 0,
        user: null,
        loading: false,
        error: null
    },
    getters: {
        user(state){
            return state.user
        },
        error(state){
            return state.error
        },
        loading(state){
            return state.loading
        },
        companies(state){
            return state.companies
        }

    },
    mutations: {
        increment: state => state.count++,
        decrement: state => state.count--,
        setUser(state , payload){
            state.user = payload
        },
        setLoading(state,payload){
            state.loading = payload
        },
        setError(state , payload){
            state.error = payload
        },
        clearError(state, payload){
            state.error = null
        },
        setCompanies(state,payload){
            state.companies = payload
        }
    },
    actions: {

        fetchCompanies({commit}) {
            return service.fetchCompanies().then((snapshot) => {
              commit('setCompanies', snapshot.val());
            });
          },
        clearError({commit}){
            commit('clearError')
        },
        signUserUp({commit} , payload){
            commit('setLoading',true)
            commit('clearError')
            firebase.auth().createUserWithEmailAndPassword(payload.email,payload.password)
            .then(
                (user) => {
                    commit('setLoading',false)
                    alert('Hesap Oluşturuldu')
                    const newUser = {
                        id: user.uid
                    }
                    commit('setUser',newUser)
                   
                },
                (err) => {
                    commit('setLoading',true)
                    commit('setError',err)
                    alert('Bi sorun oluştu' + err.message)
                }
            ).catch(
                error =>  {
                    commit('setLoading',false)
                    commit('setError',error)
                    console.log(error)
                }
            );
        },

        signUserIn({commit} ,  payload){
            commit('setLoading',true)
            commit('clearError')
            firebase.auth().signInWithEmailAndPassword(payload.email,payload.password)
            .then(
                (user) => {
                    commit('setLoading',false)
                   
                    alert('Giriş Yapıldı')
                    const newUser = {
                        id: user.uid
                    }
                    commit('setUser',newUser)
                   
               },
               (err )=> {
                commit('setError',err)
                   alert('giriş Başarısız tekrar dene')
                  
               }
           ).catch(
            error =>  {
                commit('setLoading',false)
                commit('setError',error)
                console.log(error)
            }
            );
        },
        autoSignIn({commit},payload){
            commit('setUser',{id:payload.uid})
        },

        createCompany({commit},payload){
            const company = {
                name : payload.name,
                description : payload.description
            }
            firebase.database().ref('companies').push(company)
            .then((data)=> {
             //   const key = data.key
                console.log(data)

            }).catch((error)=> {
                console.log(error);
            })
            
        }
    }

})