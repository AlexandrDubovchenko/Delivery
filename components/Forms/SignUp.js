import React from 'react';
import { StyleSheet, View } from 'react-native';
import SubmitButton from './Controlers/SubmitButton'
import { FormInput } from './Controlers/Input';
import { connect } from 'react-redux';
import { signup } from '../../redux/reducers/auth-reducer';
import { reduxForm, Field } from 'redux-form';

const SignUpForm = (props) => {
    const onSubmit = ({ email, password }) => {
        props.signup(email, password)
    }
    return (
        <View style={styles.form}>
            <Field placeholder='Email/Phone' name="email" component={FormInput} />
            <Field placeholder='Password' name="password" password={true} component={FormInput} />
            <SubmitButton onSubmit={props.handleSubmit(onSubmit)} text={props.text} />
        </View>
    )
}

const SignUpReduxForm = reduxForm({ form: 'signIn' })(SignUpForm);

const styles = StyleSheet.create({
    form: {
        flex: 2,
    },
})

export default connect(null, { signup })(SignUpReduxForm)