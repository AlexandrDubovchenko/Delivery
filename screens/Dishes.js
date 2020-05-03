import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CategoryDishesList from '../components/DishesList/DishesList';

const DishesScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <CategoryDishesList title={props.route.params.title} />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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