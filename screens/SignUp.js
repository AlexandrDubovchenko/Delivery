import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SignUpForm from '../components/Forms/SignUp';
import { AuthHeader } from '../components/AuthHeader';

export const SignUpScreen = (props) => (
    <View style={styles.container}>
        <AuthHeader navigation={props.navigation} switch="SignIn" />
        <Text style={styles.text}>Регистрация</Text>
        <SignUpForm text='Регистрация' />
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFD700",
    },
    text: {
        fontSize: 30,
        alignSelf: "center",
        color: "#006400",
        flex: .5
    },
})