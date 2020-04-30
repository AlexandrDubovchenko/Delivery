import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet, View, Image } from 'react-native';
import * as RootNavigation from '../RootNavigation';

const Footer = (props) => {
 
    return (
        <View style={styles.footer}>
            <TouchableOpacity onPress={() => RootNavigation.navigate('HomeScreen')}>
                <Image style={styles.footer_icon} source={require('../assets/Footer/list.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => RootNavigation.navigate('SearchScreen')}>
                <Image style={styles.footer_icon} source={require('../assets/Footer/search.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => RootNavigation.navigate('ProfileScreen')}>
                <Image style={styles.footer_icon} source={require('../assets/Footer/person.png')} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        flex: 0.1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: '#006400',
    },
    footer_icon: {
        height: 40,
        width: 40
    }
});

export default Footer