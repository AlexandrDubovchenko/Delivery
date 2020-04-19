import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SubmitButton } from './Controlers/SubmitButton'
import { InputForm } from './Controlers/Input';

export const SignInForm = (props) => (
    <View style={styles.form}>
        <InputForm placeholder='Email/Phone' />
        <InputForm placeholder='Password' password={true} />
        <SubmitButton text={props.text} />
    </View>
)

const styles = StyleSheet.create({
    form: {
        flex: 2,
    },
})