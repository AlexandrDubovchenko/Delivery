import React from 'react';
import { StyleSheet, View } from 'react-native';
import SubmitButton from './Controlers/SubmitButton'
import { FormInput } from './Controlers/Input';
import { connect } from 'react-redux';
import { logIn } from '../../redux/reducers/auth-reducer';
import { reduxForm, Field } from 'redux-form';

const SignInForm = (props) => {
    const onSubmit = ({email, password}) => {
        props.logIn(email, password)
    } 
    return (
        <View style={styles.form}>
            <Field placeholder='Email/Phone' name="email" component={FormInput}/>
            <Field placeholder='Password'  name="password" password={true} component={FormInput}/>
            <SubmitButton onSubmit={props.handleSubmit(onSubmit)}  text={props.text} />
        </View>
    )
}

const SignInReduxForm = reduxForm({form: 'signIn'})(SignInForm);


const styles = StyleSheet.create({
    form: {
        flex: 2,
    },
})


const mapStateToProps = (state) => ({

    authUserId: state.auth.isAuth
})


export default connect(mapStateToProps, { logIn })(SignInReduxForm)