import firebase from "firebase"

  export const AuthApi = {
    login(email, password) {        
        return firebase.auth().signInWithEmailAndPassword(email, password)
    }
  }
