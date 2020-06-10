import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from '@ui-kitten/components';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#FFD700',
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 10,
  },
});

const SignInButton = (props) => (
  <TouchableOpacity
    onPress={() => props.navigation.navigate('SignIn')}
    style={styles.button}
  >
    <Text category="h5">SignIn</Text>
  </TouchableOpacity>
);


export default SignInButton;
