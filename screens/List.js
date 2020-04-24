import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Footer } from '../components/Footer';
import Header from '../components/List/Header';
import { ListCustomItemShowcase } from '../components/List/ListUi';

const ListScreen = (props) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.title}>
        <Text style={styles.titleText}>Категории</Text>
      </View>
      <View style={styles.content}>
        <ListCustomItemShowcase />
      </View>
      <Footer />
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

export default ListScreen