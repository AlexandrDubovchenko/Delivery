import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { logOut } from '../../redux/reducers/auth-reducer';
import { connect } from 'react-redux';

const Header = (props) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={props.logOut} style={styles.basketButton}>
                <Text>Выйти</Text>
            </TouchableOpacity>
            <Text>Категории</Text>
            <TouchableOpacity>
                <Text>Корзина</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        borderWidth: 1,
        borderColor: "green"
    },

});

export default connect(null, {logOut})(Header)