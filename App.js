import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet,} from 'react-native';
import { WelcomeScreen } from './screens/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SignUpScreen } from './screens/SignUp';
import * as eva from '@eva-design/eva';
import { ApplicationProvider,} from '@ui-kitten/components';
import { SignInScreen } from './screens/SignIn';


const Stack = createStackNavigator();

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
       
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#006400",
            height: 40
          },
          title: '',
          headerLeft: null
        }}
      >
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
        />
           <Stack.Screen
          name="SignIn"
          component={SignInScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </ApplicationProvider>  
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
})