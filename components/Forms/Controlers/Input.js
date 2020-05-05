import React from 'react';
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
});

const FormInput = (props) => {
  const { meta, placeholder, password } = props;
  const hasError = meta.error && meta.touched;
  const {
    input: { value, onChange },
  } = props;
  return (
    <View>
      <Input
        // eslint-disable-next-line no-sequences
        style={styles.input, hasError ? styles.errorInput : null}
        textStyle={{ color: '#FFD700' }}
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
