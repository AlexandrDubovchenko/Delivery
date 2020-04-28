import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { logOut } from '../redux/reducers/auth-reducer';
import { connect } from 'react-redux';

const Header = (props) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={props.logOut} >
                <Image style={styles.logOutButton} source={require('../assets/log-out-outline.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.basketButton}>
                <Image style={styles.logOutButton} source={require('../assets/basket.png')} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: "#FFD700",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    logOutButton: {
        height: 40,
        width: 40
    }

});

export default connect(null, { logOut })(Header)