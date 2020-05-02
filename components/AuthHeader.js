import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ExitButton } from './ExitButton';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const AuthHeader = (props) => {
    const switchText = props.switch.substring(0, 4) + ' ' + props.switch.substring(4)
    return (
        <View style={styles.header}>
            <ExitButton navigation={props.navigation} />
            <TouchableOpacity onPress={() => props.navigation.replace(props.switch)}><Text style={[styles.button]}>{switchText}</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        color: "#006400",
        marginTop: 25,
        fontSize: 20
    },
    header: {
        flex: .5,
        flexDirection: "row",
        justifyContent: "space-between"
    },
})