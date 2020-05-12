import React from 'react';
import Order from './Order';
import TestRenderer from 'react-test-renderer';
import { ApplicationProvider } from '@ui-kitten/components';
import store from '../redux/store';
import * as eva from '@eva-design/eva';
import { Provider } from 'react-redux';

test('screen should render without error', () => {

  const welcomeScreenTest = TestRenderer.create(
    <ApplicationProvider {...eva} theme={eva.light}>
      <Provider store={store}>
        <Order />
      </Provider>
    </ApplicationProvider>

  );
  expect(welcomeScreenTest.toJSON()).toMatchSnapshot();

});