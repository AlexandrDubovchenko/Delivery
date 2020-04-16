import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SignIn } from '../components/welcomeComponents/SignIn';
import { SignUp } from '../components/welcomeComponents/SignUp';
import { WelcomeHeader } from '../components/welcomeComponents/WelcomeHeader';
export const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <WelcomeHeader/>
      <View style={styles.content}>
        <SignIn/>
        <SignUp/>
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