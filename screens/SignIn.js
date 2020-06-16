import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SignInForm from '../components/Forms/SignIn';
import { AuthHeader } from '../components/AuthHeader';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    flex: 0.5,
    fontSize: 30,
    color: '#FFD700',
    alignSelf: 'center',
  },
});

const SignInScreen = ({ navigation }) => (
  <View style={styles.container}>
    <AuthHeader navigation={navigation} toggle="SignUp" />
    <Text style={styles.text}>Войти</Text>
    <SignInForm text="Войти" />
  </View>
);

export default SignInScreen;
