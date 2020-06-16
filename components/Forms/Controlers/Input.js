/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { Input } from '@ui-kitten/components';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#006400',
    borderColor: '#006400',
  },
  errorInput: {
    borderColor: 'red',
  },
  inputContainer: {
    marginVertical: 5,
    marginHorizontal: 15,
  },
});
const FormInput = (props) => {
  const { meta, placeholder, password } = props;
  const hasError = meta.error && meta.touched;
  const {
    input: { value, onChange },
  } = props;
  useEffect(() => {
    onChange(props.value);
  }, [props.value]);

  return (
    <View style={styles.inputContainer}>
      <Input
        // eslint-disable-next-line no-sequences
        style={styles.input, hasError ? styles.errorInput : null}
        textStyle={{ color: 'black' }}
        placeholderTextColor="#FFD700"
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        secureTextEntry={password}
      />
      {hasError && <Text>{meta.error}</Text>}
    </View>
  );
};

export default FormInput;
