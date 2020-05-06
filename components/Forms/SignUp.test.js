import TestRenderer from 'react-test-renderer';
import  {SignUpForm},  from './SignUp';
import React from 'react';

jest.mock('react-native-gesture-handler', () => {});
jest.mock('@ui-kitten/components', () => {});
jest.mock('react-redux', () => {
  return {
    connect: (mapStateToProps, mapDispatchToProps) => (ReactComponent) => ({
      mapStateToProps,
      mapDispatchToProps,
      ReactComponent
    }),
    Provider: ({ children }) => children
  }
})

test('signUp should render without error', () => {
  const signUpTest = TestRenderer.create(<SignUpForm />);
  expect(signUpTest.toJSON()).toMatchSnapshot();
});