import firebase from 'firebase';
import 'firebase/firestore';

export const AuthApi = {
  login(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  },
  signUp(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  },
};

export const ListApi = {
  getCategories() {
    const db = firebase.firestore().collection('categoriesList');
    return db.get();
  },
  getDishes(categoryName) {
    const db = firebase.firestore().collection('categoriesList').doc(categoryName).collection('dishes');
    return db.get();
  },
  findDishes(dishName, categoryName) {
    const db = firebase.firestore().collection('categoriesList').doc(categoryName).collection('dishes')
      .doc(dishName);
    return db.get();
  },
};

export const orderAPI = {
  sendOrder(orderData) {
    const db = firebase.firestore().collection('ordersList');
    db.doc(Date.now().toString()).set(orderData);
  },

  getOrders(id) {
    const db = firebase.firestore().collection('ordersList').where('id', '==', id).get();
    return db;
  },
};
