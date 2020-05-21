import { orderAPI } from '../../api';

const SET_ORDERS = 'GET ORDERS';

const initialState = {
  orders: [],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDERS:
      return {
        ...state,
        orders: action.orders,
      };
    default:
      return state;
  }
};

const setOrders = (orders) => ({ type: SET_ORDERS, orders });

export const getOrders = (id) => (dispatch) => {
  const orders = [];
  orderAPI.getOrders(id)
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        orders.push(doc.data());
      });
      dispatch(setOrders(orders));
    });
};

export default profileReducer;
