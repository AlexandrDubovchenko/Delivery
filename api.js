import firebase from "firebase"
import 'firebase/firestore';

export const AuthApi = {
  login(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
  },
  signUp(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
  }
}

export const ListApi = {
  getList(listName) {
    db = firebase.firestore();
    return db.collection(listName).get()
  }
}