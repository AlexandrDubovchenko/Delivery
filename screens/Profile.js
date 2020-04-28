import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ProfileInfo from '../components/Profile/Info';

const ProfileScreen = (props) => {
  return (
    <View style={styles.container}>
      <Header />
      <ProfileInfo />
      <View style={styles.content}>
        <TouchableOpacity>
          <Text>Мои заказы</Text>
        </TouchableOpacity>
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

});

export default ProfileScreen