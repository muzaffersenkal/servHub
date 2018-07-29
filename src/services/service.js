import firebase from 'firebase'

export default {
    fetchCompanies() {
      return firebase.database().ref('/companies').once('value');
    },
  
  }
  