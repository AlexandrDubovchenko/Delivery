import TestRenderer from 'react-test-renderer';
import * as eva from '@eva-design/eva';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ApplicationProvider } from '@ui-kitten/components';
import DishesList from './DishesList';

const initialStateValues = {}

it('DishesList renders correctly', () => {
  const store = createStore((state) => state, initialStateValues)
  const tree = TestRenderer.create(
    <ApplicationProvider {...eva} theme={eva.light}>
      <Provider store={store}>
        <DishesList/>
    </Provider>
    </ApplicationProvider>

  ).toJSON()
  
  expect(tree).toMatchSnapshot()
})