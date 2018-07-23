import {store} from '../store/store'
export default (to, from, next ) => {
    if(store.getters.user){
        console.log("logged in")
        next()
    }else{
        console.log(store.getters.user)
        next('login')
    }
  
}