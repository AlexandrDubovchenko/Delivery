/* eslint-disable import/no-named-as-default */
import React, { useEffect } from 'react';
import {
  StyleSheet, View, Text, Dimensions,
} from 'react-native';
import OrderForm from '../components/Forms/Order';


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
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

const OrderScreen = ({ route, navigation }) => {
  useEffect(() => {
    route.params.toggleIsOrder(true);
    return () => {
      route.params.toggleIsOrder(false);
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Оформление заказа</Text>
      </View>
      <OrderForm navigation={navigation} />
    </View>
  );
};
export default OrderScreen;
