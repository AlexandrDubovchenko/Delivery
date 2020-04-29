import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SearchInput from '../components/Search/Input';
import FoundDishesList from '../components/Search/FoundDishesList';

const SearchScreen = (props) => {
  return (
    <View style={styles.container}>
      <SearchInput />
      <View style={styles.content}>
        <FoundDishesList />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginTop: 15,
    flex: 12
  },

});

export default SearchScreen