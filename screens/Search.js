import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SearchInput from '../components/Search/SearchInput';

const SearchScreen = (props) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <SearchInput />
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
    marginTop: 15,
    flex: 12
  },

});

export default SearchScreen