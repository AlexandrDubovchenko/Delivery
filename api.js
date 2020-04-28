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
  getCategories() {
    const db = firebase.firestore().collection('categoriesList');
    return db.get()
  },
  getDishes(category) {
    const db = firebase.firestore().collection('categoriesList').doc(category).collection('dishes');
    return db.get()
  },
  getAllDishes() {
    const db = firebase.firestore().collection('categoriesList')
    return db.get()
  }
}