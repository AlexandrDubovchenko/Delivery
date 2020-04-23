import React from 'react';
import { Input } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

export const FormInput = (props) => {
  const {
    input: { value, onChange }
  } = props
  
  return (
    <Input
      style={styles.input}
      textStyle={{ color: "#FFD700" }}
      placeholderTextColor="#FFD700"
      placeholder={props.placeholder}
      value={value}
      onChangeText={onChange}
      secureTextEntry={props.password}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#006400",
    borderColor: "#006400",
  },
});

