import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet, View, Text } from 'react-native';
import { ExitButton } from './ExitButton';

const styles = StyleSheet.create({
  button: {
    color: '#006400',
    marginTop: 25,
    fontSize: 20,
  },
  header: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export const AuthHeader = ({ navigation, toggle }) => {
  const switchText = `${toggle.substring(0, 4)} ${toggle.substring(4)}`;
  return (
    <View style={styles.header}>
      <ExitButton navigation={navigation} />
      <TouchableOpacity onPress={() => navigation.replace(toggle)}>
        <Text style={[styles.button]}>{switchText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthHeader;
