/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-expressions */
const SET_BASKET_ITEM = 'SET_BASKET_ITEM ';
const REMOVE_BASKET_ITEM = 'REMOVE_BASKET_ITEM';
const CHANGE_ITEM_NUMBER = 'CHANGE_ITEM_NUMBER';
const RESET_BASKET = 'RESET_BASKET';

const initialState = {
  basketList: [],
  totalPrice: 0,
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BASKET_ITEM:
      if (state.basketList.find((el) => el.name === action.name)) {
        state.basketList.find((el) => el.name === action.name).number++;
        return {
          ...state,
          basketList: [...state.basketList],
          totalPrice: state.basketList.reduce((total, el) => total + el.price * el.number, 0),
        };
      }
      return {
        ...state,
        basketList: [...state.basketList, {
          name: action.name, number: 1, img: action.img, price: action.price,
        }],
        totalPrice: state.totalPrice + +action.price,
      };
    case REMOVE_BASKET_ITEM:
      state.basketList.splice(state.basketList.indexOf(state.basketList
        .find((el) => el.name === action.name)), 1);
      return {
        ...state,
        basketList: [...state.basketList],
        totalPrice: state.basketList.reduce((total, el) => total + el.price * el.number, 0),
      };
    case CHANGE_ITEM_NUMBER:
      action.add ? state.basketList.find((el) => el.name === action.name).number++
        : state.basketList.find((el) => el.name === action.name && el.number > 0).number--;
      return {
        ...state,
        basketList: [...state.basketList],
        totalPrice: state.basketList.reduce((total, el) => total + el.price * el.number, 0),
      };
    case RESET_BASKET:
      return {
        basketList: [],
        totalPrice: 0,
      };
    default:
      return state;
  }
};


export const setBasketItem = (name, img, price) => ({
  type: SET_BASKET_ITEM, name, img, price,
});
export const removeBasketItem = (name) => ({ type: REMOVE_BASKET_ITEM, name });
export const changeItemNumber = (name, add = true) => ({ type: CHANGE_ITEM_NUMBER, name, add });
export const resetBasket = () => ({ type: RESET_BASKET });


export default basketReducer;
