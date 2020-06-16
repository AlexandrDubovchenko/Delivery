import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SignInButton from '../components/Welcome/SignInButton';
import SignUpButton from '../components/Welcome/SignUpButton';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 5,
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 30,
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});


const WelcomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.title}>
      <Text style={styles.titleText}>Hunter Delivery</Text>
    </View>
    <View style={styles.content}>
      <SignInButton navigation={navigation} />
      <SignUpButton navigation={navigation} />
    </View>
  </View>
);

export default WelcomeScreen;
