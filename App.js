/* eslint-disable react/jsx-props-no-spreading */
import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './RootNavigation';
import Main from './Main';
import store from './redux/store';

const firebaseConfig = {
  apiKey: 'AIzaSyDp4KgtVf8kuT69nDyVX4N_aMjnxChHzo0',
  authDomain: 'hunterdelivery-3c508.firebaseapp.com',
  databaseURL: 'https://hunterdelivery-3c508.firebaseio.com',
  projectId: 'hunterdelivery-3c508',
  storageBucket: 'hunterdelivery-3c508.appspot.com',
  messagingSenderId: '605617784884',
  appId: '1:605617784884:web:744ac129c8d8ef1d442261',
};
firebase.initializeApp(firebaseConfig);
const Stack = createStackNavigator();
export default function App() {
  return (

    <Provider store={store}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: '#006400',
                height: 40,
              },
              title: '',
              headerLeft: null,
            }}
          >
            <Stack.Screen
              name="Main"
              component={Main}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </Provider>
  );
}
