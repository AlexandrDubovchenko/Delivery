import React from 'react';
import { Text } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  profileInfo: {
    flex: 2,
  },
});

const ProfileInfo = ({ email }) => (
  <View style={styles.profileInfo}>
    <Text>{email}</Text>
  </View>
);

const mapStateToProps = (state) => (
  {
    email: state.auth.email,
  });

export default connect(mapStateToProps, null)(ProfileInfo);
