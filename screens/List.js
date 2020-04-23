import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { logOut } from '../redux/reducers/auth-reducer';
import { Footer } from '../components/Footer';
import { ListItem } from '../components/List/ListItem';
import  Header  from '../components/List/Header';

const ListScreen = (props) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}> 
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
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
    flex: 7
  }
});

export default connect(null, { logOut })(ListScreen)