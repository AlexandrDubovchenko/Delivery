import React from 'react';
import Order from './Order';
import TestRenderer from 'react-test-renderer';
import { ApplicationProvider } from '@ui-kitten/components';
import store from '../redux/store';
import * as eva from '@eva-design/eva';
import { Provider } from 'react-redux';
import { RotationGestureHandler } from 'react-native-gesture-handler';

test('screen should render without error', () => {

  const route ={params: {
    toggleIsOrder: function(boolean) {
      return boolean
    } 
  }}

  const orderScreenTest = TestRenderer.create(
    <ApplicationProvider {...eva} theme={eva.light}>
      <Provider store={store}>
        <Order route={route}/>
      </Provider>
    </ApplicationProvider>

  );
  expect(orderScreenTest.toJSON()).toMatchSnapshot();

});