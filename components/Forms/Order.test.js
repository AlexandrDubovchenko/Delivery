import * as eva from '@eva-design/eva';
import React from 'react';
import store from '../../redux/store';
import { reduxForm } from 'redux-form';
import { Provider } from 'react-redux';
import { ApplicationProvider } from '@ui-kitten/components';
import TestRenderer from 'react-test-renderer';
import { OrderForm } from './Order';

const spy = jest.fn()
const Decorated = reduxForm({
  form: 'testForm', onSubmit: { spy }
})(OrderForm)

const formFieldValues = { name: 'email' }

it('should renders correctly', () => {
  const tree = TestRenderer.create(
    <ApplicationProvider {...eva} theme={eva.light}>
      <Provider store={store}>
        <Decorated 
          {...formFieldValues}
          orderDishes={['pizza']} totalPrice={100}
        />
      </Provider>
    </ApplicationProvider>

  ).toJSON()

  expect(tree).toMatchSnapshot()
})