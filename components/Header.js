import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { logOut } from '../redux/reducers/auth-reducer';
import { connect } from 'react-redux';
import * as RootNavigation from '../RootNavigation';

const Header = (props) => {

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={props.logOut} >
                <Image style={styles.logOutButton} source={require('../assets/Header/log-out-outline.png')} />
            </TouchableOpacity>
            {!props.isBasket ?
                <TouchableOpacity style={styles.basketButton} onPress={() => RootNavigation.navigate('BasketScreen')}>
                    <Image style={styles.logOutButton} source={require('../assets/Header/basket.png')} />
                    {
                        props.basketItemsNumber ?
                            <Text>{props.basketItemsNumber}</Text> : null
                    }
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.basketButton}>
                    <Text>Оформить заказ</Text>
                </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 0.1,
        backgroundColor: "#FFD700",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    logOutButton: {
        height: 40,
        width: 40
    },
    basketButton: {
        flexDirection: "row",
        alignItems: "flex-end"
    }

});

const mapStateToProps = (state) => {
    return {
        basketItemsNumber: state.basket.basketList.length
    }
}

export default connect(mapStateToProps, { logOut })(Header)