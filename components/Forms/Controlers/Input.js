import React from 'react';
import { Input } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

export const InputForm = (props) => {
  const [value, setValue] = React.useState('');
  return (
    <Input
      style={styles.input}
      textStyle={{ color: "#FFD700" }}
      placeholderTextColor="#FFD700"
      placeholder={props.placeholder}
      value={value}
      onChangeText={nextValue => setValue(nextValue)}
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

