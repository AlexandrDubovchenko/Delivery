import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  submit: {
    alignItems: 'center',
    backgroundColor: '#FFD700',
    marginHorizontal: 50,
    marginVertical: 50,
    padding: 10,
  },
  submitButton: {
    fontSize: 17,
  },
});

const SubmitButton = ({ onSubmit, text }) => (
  <TouchableOpacity onPress={onSubmit} style={styles.submit}>
    <Text style={styles.submitButton}>{text}</Text>
  </TouchableOpacity>
);

export default SubmitButton;
