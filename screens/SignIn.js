import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SignInForm from '../components/Forms/SignIn';
import { AuthHeader } from '../components/AuthHeader';


const SignInScreen = (props) => {
    return (
        <View style={styles.container}>
            <AuthHeader navigation={props.navigation} switch='SignUp' />
            <Text style={styles.text}>Войти</Text>
            <SignInForm text='Войти' />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFD700"
    },
    text: {
        flex: .5,
        fontSize: 30,
        color: "#006400",
        alignSelf: "center"
    }
})


export default SignInScreen