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

const SignUpButton = (props) => (
  <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')} style={styles.button}>
    <Text category="h5">SignUp</Text>
  </TouchableOpacity>
);

export default SignUpButton;
