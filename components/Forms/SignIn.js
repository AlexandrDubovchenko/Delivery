import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SubmitButton from './Controlers/SubmitButton'
import { FormInput } from './Controlers/Input';
import { connect } from 'react-redux';
import { logIn } from '../../redux/reducers/auth-reducer';
import { reduxForm, Field } from 'redux-form';
import { required } from '../../utilities/validation';


const SignInForm = (props) => {
    const onSubmit = ({ email, password }) => {
        props.logIn(email, password)
    }
    console.log(props.errorMessage);

    return (
        <View style={styles.form}>
            <Field placeholder='Email/Phone' name="email" component={FormInput} validate={[required]}/>
            <Field placeholder='Password' name="password" password={true} component={FormInput} validate={[required]}/>
            <View style={styles.errorContainer}>
                {props.errorMessage && <Text style={styles.error}>
                    {props.errorMessage.message}
                </Text>}
            </View>
            <SubmitButton onSubmit={props.handleSubmit(onSubmit)} text={props.text} />

        </View>
    )
}

const SignInReduxForm = reduxForm({ form: 'signIn' })(SignInForm);

const styles = StyleSheet.create({
    form: {
        flex: 2,
    },
    error: {
        color: 'red'
    },
    errorContainer: {
        alignSelf: "center"
    }
})

const mapStateToProps = (state) => {

    return {
        errorMessage: state.auth.error
    }
}
export default connect(mapStateToProps, { logIn })(SignInReduxForm)