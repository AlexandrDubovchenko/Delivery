import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CategoryList from '../components/DishesList/DishesList';

const DishesScreen = (props) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.title}>
        <Text style={styles.titleText}>Категории</Text>
      </View>
      <View style={styles.content}>
        <CategoryList title={props.route.params.title} />
      </View>
      <Footer navigation={props.navigation} />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 12
  },
  titleText: {
    fontSize: 30
  },
  title: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center"
  }
});

export default DishesScreen