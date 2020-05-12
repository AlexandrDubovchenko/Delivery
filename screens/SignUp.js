import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
// eslint-disable-next-line import/no-named-as-default
import SignUpForm from '../components/Forms/SignUp';
import { AuthHeader } from '../components/AuthHeader';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD700',
  },
  text: {
    fontSize: 30,
    alignSelf: 'center',
    color: '#006400',
    flex: 0.5,
  },
});

const SignUpScreen = ({ navigation }) => (
  <View style={styles.container}>
    <AuthHeader navigation={navigation} toggle="SignIn" />
    <Text style={styles.text}>Регистрация</Text>
    <SignUpForm text="Регистрация" />
  </View>
);

export default SignUpScreen;
