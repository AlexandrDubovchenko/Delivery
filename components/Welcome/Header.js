import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#FFD700',
  },
  headerText: {
    fontSize: 50,
    color: '#006400',
  },
  welcomeText: {
    fontSize: 20,
    color: '#006400',
  },
});

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>Hunter Delivery</Text>
    <Text style={styles.welcomeText}>Welcome to the Hunter Delivery</Text>
  </View>
);

export default Header;
