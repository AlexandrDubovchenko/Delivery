/* eslint-disable global-require */
import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import ProfileInfo from '../components/Profile/Info';
import ButtonList from '../components/Profile/ButtonList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const ProfileScreen = () => (
  <View style={styles.container}>
    <ProfileInfo />
    <ButtonList />
  </View>
);

export default ProfileScreen;
