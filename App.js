import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Main from './Main';
import firebase from "firebase"

var firebaseConfig = {
  apiKey: "AIzaSyBoDtZBrv3X5jTs0qVHm9V6FBvJ6uL1QDA",
  authDomain: "hunterdelivery-b7269.firebaseapp.com",
  databaseURL: "https://hunterdelivery-b7269.firebaseio.com",
  projectId: "hunterdelivery-b7269",
  storageBucket: "hunterdelivery-b7269.appspot.com",
  messagingSenderId: "156249442079",
  appId: "1:156249442079:web:3eab34f9ad20ab045f122a"
};

export default function App() {

  useEffect(() => {
    firebase.initializeApp(firebaseConfig)
  }, [])

  return (
    <Provider store={store}>
      <Main />
    </Provider>

  )
}
