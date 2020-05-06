import React from 'react';
import WelcomeScreen from './Welcome';
import TestRenderer from 'react-test-renderer';

jest.mock('react-native-gesture-handler', () => {});

test('screen should render without error', () => {
  
  const signUpTest = TestRenderer.create(<WelcomeScreen />);
  expect(signUpTest.toJSON()).toMatchSnapshot();
  
});