import TestRenderer from 'react-test-renderer';
import  {SignUpForm}  from './SignUp';
import * as eva from '@eva-design/eva';
import React from 'react';
import { createStore } from 'redux';
import { reduxForm } from 'redux-form';
import { Provider } from 'react-redux';
import { ApplicationProvider } from '@ui-kitten/components';

const spy = jest.fn()
const initialStateValues = {}
const Decorated = reduxForm({ 
     form: 'testForm', onSubmit: { spy }
})(SignUpForm)

const formFieldValues = {name: 'email'}

it('YourReduxFormComponent renders correctly', () => {
  const store = createStore((state) => state, initialStateValues)
  const tree = TestRenderer.create(
    <ApplicationProvider {...eva} theme={eva.light}>
    <Provider store={store}>
      <Decorated
        {...formFieldValues}
        />
    </Provider>
    </ApplicationProvider>

  ).toJSON()
  
  expect(tree).toMatchSnapshot()
})