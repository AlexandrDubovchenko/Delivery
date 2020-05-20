/* eslint-disable global-require */
import React from 'react';
import {
  StyleSheet, View, Text,
} from 'react-native';
import OrdersList from '../components/Profile/MyOrders/OrdersList';


const styles = StyleSheet.create({
  container: {
    flex: 1,
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

const MyOrdersScreen = () => (
  <View style={styles.container}>
    <View style={styles.title}>
      <Text style={styles.titleText}>Мои заказы</Text>
    </View>
    <OrdersList />
  </View>
);

export default MyOrdersScreen;
