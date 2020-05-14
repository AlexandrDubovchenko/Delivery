import React from 'react';
import { StyleSheet, View } from 'react-native';
import SearchInput from '../components/Search/Input';
import FoundDishesList from '../components/Search/FoundDishesList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 5,
  },
  content: {
    marginTop: 15,
    flex: 12,
  },

});

const SearchScreen = () => (
  <View style={styles.container}>
    <SearchInput />
    <View style={styles.content}>
      <FoundDishesList />
    </View>
  </View>
);

export default SearchScreen;
