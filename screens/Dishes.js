import React from 'react';
import { StyleSheet, View } from 'react-native';
import CategoriesList from '../components/DishesList/DishesList';

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

const DishesScreen = ({ route }) => (
  <View style={styles.container}>
    <View style={styles.content}>
      <CategoriesList title={route.params.title} />
    </View>
  </View>

);

export default DishesScreen;
