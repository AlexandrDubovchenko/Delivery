/* eslint-disable global-require */
import React from 'react';
import { Text } from '@ui-kitten/components';
import { StyleSheet, View, Image } from 'react-native';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  profileInfo: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  ava: {
    height: 100,
    width: 100,
  },
});

const ProfileInfo = ({ email }) => (
  <View style={styles.profileInfo}>
    <Image style={styles.ava} source={require('../../assets/Profile/no-ava-1.jpg')} />
    <Text>{email}</Text>
  </View>
);

const mapStateToProps = (state) => (
  {
    email: state.auth.email,
  });

export default connect(mapStateToProps, null)(ProfileInfo);
