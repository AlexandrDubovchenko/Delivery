import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SignInButton } from '../components/Welcome/SignInButton';
import { SignUpButton } from '../components/Welcome/SignUpButton';
import { Header } from '../components/Welcome/Header';


export const WelcomeScreen = (props) => {

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <SignInButton navigation={props.navigation} />
        <SignUpButton navigation={props.navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  content: {
    flex: .5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#006400"
  },
});