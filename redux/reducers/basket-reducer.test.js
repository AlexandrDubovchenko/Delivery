/* eslint-disable no-undef */
import basketReducer, { setBasketItem } from './basket-reducer';

it('length of basketList should increase', () => {
  // 1. test data
  const action = setBasketItem('burger', 'img');
  const state = {
    basketList: [],

  };
  // 2. action

  const newState = basketReducer(state, action);

  // 3. expection
  expect(newState.basketList.length).toBe(1);
});
