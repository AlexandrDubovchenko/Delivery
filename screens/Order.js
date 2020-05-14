/* eslint-disable import/no-named-as-default */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import OrderForm from '../components/Forms/Order';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD700',
  },
  text: {
    fontSize: 30,
    alignSelf: 'center',
    color: '#006400',
    flex: 0.5,
  },
});

const OrderScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.text}>Оформление заказа</Text>
    <OrderForm navigation={navigation} />
  </View>
);

export default OrderScreen;
