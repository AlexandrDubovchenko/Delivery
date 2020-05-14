/* eslint-disable global-require */
import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet, View, Text, Image,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as RootNavigation from '../RootNavigation';

const styles = StyleSheet.create({
  header: {
    flex: 0.1,
    backgroundColor: '#FFD700',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonImg: {
    height: 40,
    width: 40,
  },
  basketButton: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

});

// eslint-disable-next-line no-shadow
const Header = ({ isBasket, basketItemsNumber }) => (
  <View style={styles.header}>
    <TouchableOpacity onPress={() => RootNavigation.goBack()}>
      <Image style={styles.buttonImg} source={require('../assets/Header/back.png')} />
    </TouchableOpacity>

    {!isBasket
      ? (
        <TouchableOpacity onPress={() => RootNavigation.navigate('BasketScreen')}>
          <Image style={styles.buttonImg} source={require('../assets/Header/basket.png')} />
          {
            basketItemsNumber
              ? <Text>{basketItemsNumber}</Text> : null
          }
        </TouchableOpacity>
      )
      : (
        <TouchableOpacity style={styles.basketButton} onPress={() => RootNavigation.navigate('OrderScreen')}>
          <Text>Оформить заказ</Text>
        </TouchableOpacity>
      )}
  </View>
);

const mapStateToProps = (state) => ({
  basketItemsNumber: state.basket.basketList.length,
});

export default connect(mapStateToProps, null)(Header);
