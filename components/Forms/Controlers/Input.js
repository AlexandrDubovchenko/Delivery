import React from 'react';
import { Input } from '@ui-kitten/components';
import { StyleSheet, Text, View } from 'react-native';

export const FormInput = (props) => {
  const hasError = props.meta.error && props.meta.touched
  const {
    input: { value, onChange }
  } = props
  
  return (
    <View>
    <Input
      style={styles.input, hasError ? styles.errorInput : null }
      textStyle={{ color: "#FFD700" }}
      placeholderTextColor="#FFD700"
      placeholder={props.placeholder}
      value={value}
      onChangeText={onChange}
      secureTextEntry={props.password}
    />
    {hasError && <Text>{props.meta.error}</Text>}
      </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#006400",
    borderColor: "#006400",
  },
  errorInput: {
    borderColor: "red"
  }
});

