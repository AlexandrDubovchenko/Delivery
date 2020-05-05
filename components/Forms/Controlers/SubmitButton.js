import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  submit: {
    marginTop: 100,
    width: 140,
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    right: 12,
    fontSize: 10,
    backgroundColor: '#006400',
    borderRadius: 20,
  },
  submitButton: {
    fontSize: 20,
    color: '#FFD700',
  },
});

const SubmitButton = ({ onSubmit, text }) => (
  <TouchableOpacity onPress={onSubmit} style={styles.submit}>
    <Text style={styles.submitButton}>{text}</Text>
  </TouchableOpacity>
);

export default SubmitButton;
