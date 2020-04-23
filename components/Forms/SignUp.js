import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SubmitButton } from './Controlers/SubmitButton'
import { FormInput } from './Controlers/Input';

export const SignUpForm = (props) => (
    <View style={styles.form}>
        <FormInput placeholder='Name' />
        <FormInput placeholder='Email/Phone' />
        <FormInput placeholder='Address' />
        <FormInput placeholder='Password' password={true} />
        <SubmitButton text={props.text} />
    </View>
)

const styles = StyleSheet.create({
    form: {
        flex: 2,
    },
})