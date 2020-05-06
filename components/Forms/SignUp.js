import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import SubmitButton from './Controlers/SubmitButton';
import FormInput from './Controlers/Input';
import { signup, resetErrorMessage } from '../../redux/reducers/auth-reducer';
import required from '../../utilities/validation';

const styles = StyleSheet.create({
  form: {
    flex: 2,
  },
  error: {
    color: 'red',
  },
  errorContainer: {
    alignSelf: 'center',
  },
});

export const SignUpForm = ({
  // eslint-disable-next-line no-shadow
  errorMessage, handleSubmit, text, signup, resetErrorMessage,
}) => {
  const onSubmit = ({ email, password }) => {
    signup(email, password);
  };
  useEffect(() => (
    () => {
      resetErrorMessage();
    }
  ), []);
  return (
    <View style={styles.form}>
      <Field placeholder="Email/Phone" name="email" component={FormInput} validate={[required]} />
      <Field placeholder="Password" name="password" password component={FormInput} validate={[required]} />
      <View style={styles.errorContainer}>
        {errorMessage
          && (
            <Text style={styles.error}>
              {errorMessage.message}
            </Text>
          )}
      </View>
      <SubmitButton onSubmit={handleSubmit(onSubmit)} text={text} />
    </View>
  );
};

const SignUpReduxForm = reduxForm({ form: 'signUp' })(SignUpForm);

const mapStateToProps = (state) => ({
  errorMessage: state.auth.error,
});

export default connect(mapStateToProps, { signup, resetErrorMessage })(SignUpReduxForm);
