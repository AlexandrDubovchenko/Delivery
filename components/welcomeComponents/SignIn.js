import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';






export const SignIn = () => <TouchableOpacity style = {styles.button}><Text>Sign In</Text></TouchableOpacity>
    
const styles = StyleSheet.create({
button: {
    borderRadius: 50,
    padding: 10,
    marginBottom: 20,
    backgroundColor: "#FFD700"
  }
});