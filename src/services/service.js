import firebase from 'firebase'

export default {
    fetchCompanies() {
      return firebase.database().ref('/companies').once('value');
    },
    fetchCompanyDetail(id) {
      return firebase.database().ref(`/companies/${id}`).once('value');
    },
  
  }
  