/* eslint-disable global-require */
import React from 'react';
import {
  StyleSheet, View, Text, Image,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ProfileInfo from '../components/Profile/Info';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 12,

  },
  functions_item: {
    height: 80,
    borderColor: 'grey',
    borderWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,

  },
  profile_icon: {
    height: 30,
    width: 30,
    marginRight: 10,
  },

});

const ProfileScreen = () => (
  <View style={styles.container}>
    <ProfileInfo />
    <View style={styles.content}>
      <TouchableOpacity style={styles.functions_item}>
        <Image style={styles.profile_icon} source={require('../assets/Profile/basket.png')} />
        <Text>Мои заказы</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.functions_item}>
        <Image style={styles.profile_icon} source={require('../assets/Profile/navigation.png')} />
        <Text>Мои адреса</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.functions_item}>
        <Image style={styles.profile_icon} source={require('../assets/Profile/card.png')} />
        <Text>Мои промокоды</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.functions_item}>
        <Image style={styles.profile_icon} source={require('../assets/Profile/question.png')} />
        <Text>Поддержка</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default ProfileScreen;
