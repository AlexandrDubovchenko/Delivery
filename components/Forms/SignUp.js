import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SubmitButton from './Controlers/SubmitButton'
import { FormInput } from './Controlers/Input';
import { connect } from 'react-redux';
import { signup } from '../../redux/reducers/auth-reducer';
import { reduxForm, Field } from 'redux-form';
import { required} from '../../utilities/validation';

const SignUpForm = (props) => {
    const onSubmit = ({ email, password }) => {
        props.signup(email, password)
    }
    return (
        <View style={styles.form}>
            <Field placeholder='Email/Phone' name="email" component={FormInput} validate={[required]}/>
            <Field placeholder='Password' name="password" password={true} component={FormInput} validate={[required]}/>
            <View style={styles.errorContainer}>
                {props.errorMessage &&
                 <Text style={styles.error}>
                    {props.errorMessage.message}
                </Text>}
            </View>
            <SubmitButton onSubmit={props.handleSubmit(onSubmit)} text={props.text} />
        </View>
    )
}

const SignUpReduxForm = reduxForm({ form: 'signIn' })(SignUpForm);

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

export default connect(mapStateToProps, { signup })(SignUpReduxForm)