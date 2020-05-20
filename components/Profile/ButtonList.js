/* eslint-disable global-require */
import React from 'react';
import {
  StyleSheet, View, Text, Image,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { resetBasket } from '../../redux/reducers/basket-reducer';
import { logOut } from '../../redux/reducers/auth-reducer';


const styles = StyleSheet.create({
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

// eslint-disable-next-line no-shadow
const ButtonList = ({ logOut, resetBasket }) => (
  <View style={styles.content}>
    <TouchableOpacity style={styles.functions_item}>
      <Image style={styles.profile_icon} source={require('../../assets/Profile/basket.png')} />
      <Text>Мои заказы</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.functions_item}>
      <Image style={styles.profile_icon} source={require('../../assets/Profile/navigation.png')} />
      <Text>Мои адреса</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.functions_item}>
      <Image style={styles.profile_icon} source={require('../../assets/Profile/card.png')} />
      <Text>Мои промокоды</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.functions_item}>
      <Image style={styles.profile_icon} source={require('../../assets/Profile/question.png')} />
      <Text>Поддержка</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.functions_item}
      onPress={() => {
        logOut();
        resetBasket();
      }}
    >
      <Image style={styles.profile_icon} source={require('../../assets/Profile/log-out-outline.png')} />
      <Text>Выйти</Text>
    </TouchableOpacity>
  </View>
);

export default connect(null, { logOut, resetBasket })(ButtonList);
