import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  img: {
    marginTop: 20,
    height: 50,
    width: 50,
  },
});

export const ExitButton = (props) => (
  <TouchableOpacity onPress={() => props.navigation.navigate('WelcomeScreen')}>
    <Image
      style={styles.img}
      source={{ uri: 'https://cdn.iconscout.com/icon/free/png-256/close-150-458082.png' }}
    />
  </TouchableOpacity>
);

export default ExitButton;
