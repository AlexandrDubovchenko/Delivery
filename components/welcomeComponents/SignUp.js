import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';






export const SignUp = () => <TouchableOpacity style = {styles.button}><Text>Sign Up</Text></TouchableOpacity>

const styles = StyleSheet.create({
    button: {
        borderRadius: 50,
        padding: 10,
        backgroundColor: "#FFD700"
      }
    });