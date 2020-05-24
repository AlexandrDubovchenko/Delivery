import React from 'react';
import { StyleSheet, View } from 'react-native';
import SignInButton from '../components/Welcome/SignInButton';
import SignUpButton from '../components/Welcome/SignUpButton';
import Header from '../components/Welcome/Header';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#006400',
  },
});

const WelcomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Header />
    <View style={styles.content} accessibilityLabel="test">
      <SignInButton navigation={navigation} />
      <SignUpButton navigation={navigation} />
    </View>
  </View>
);

export default WelcomeScreen;
