import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import BasketList from '../components/Basket/BasketList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 12,
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

const BasketScreen = ({ route }) => {
  useEffect(() => {
    route.params.toggleIsBasket(true);
    return () => {
      route.params.toggleIsBasket(false);
    };
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Корзина</Text>
      </View>
      <View style={styles.content}>
        <BasketList />
      </View>

    </View>
  );
};

export default BasketScreen;
