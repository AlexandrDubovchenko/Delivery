import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from '@ui-kitten/components';
import { StyleSheet, View, Image } from 'react-native';

export const Footer = () => {
    return (
        <View style={styles.footer}>
            <TouchableOpacity>
                <Image style={styles.footer_icon} source={require('../assets/list.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.footer_icon} source={require('../assets/search.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.footer_icon} source={require('../assets/person.png')} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        flex: 1,
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