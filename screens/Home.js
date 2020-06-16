import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useNavigationState } from '@react-navigation/native';
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

const Home = ({ navigation, route }) => {
  const isFirstRouteInParent = useNavigationState((state) => state.routes.length === 1);
  route.params.toggleIsHome(isFirstRouteInParent);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Категории</Text>
      </View>
      <View style={styles.content}>
        <CategoriesList navigation={navigation} />
      </View>
    </View>

  );
};

export default Home;
