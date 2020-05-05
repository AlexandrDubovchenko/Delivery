import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CategoriesList from '../components/CategoriesList/CategoriesList';

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

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.title}>
      <Text style={styles.titleText}>Категории</Text>
    </View>
    <View style={styles.content}>
      <CategoriesList navigation={navigation} />
    </View>
  </View>

);

export default Home;
