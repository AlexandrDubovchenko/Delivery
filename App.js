import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Main from './Main';
import firebase from "firebase"

var firebaseConfig = {
  apiKey: "AIzaSyDp4KgtVf8kuT69nDyVX4N_aMjnxChHzo0",
  authDomain: "hunterdelivery-3c508.firebaseapp.com",
  databaseURL: "https://hunterdelivery-3c508.firebaseio.com",
  projectId: "hunterdelivery-3c508",
  storageBucket: "hunterdelivery-3c508.appspot.com",
  messagingSenderId: "605617784884",
  appId: "1:605617784884:web:744ac129c8d8ef1d442261"
};

export default function App() {

  firebase.initializeApp(firebaseConfig)

  return (
    <Provider store={store}>
      <Main />
    </Provider>

  )
}
