import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#FFD700',
  },
});

const SignInButton = (props) => (
  <TouchableOpacity
    onPress={() => props.navigation.navigate('SignIn')}
    style={styles.button}
  >
    <Text>Sign In</Text>
  </TouchableOpacity>
);


export default SignInButton;
