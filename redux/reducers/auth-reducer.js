/* eslint-disable no-use-before-define */
import { AuthApi } from '../../api';

const SET_USER_DATA = 'SET-USER-DATA';
const SEND_ERROR_MESSAGE = 'SEND_ERROR_MESSAGE';
const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };
    case SEND_ERROR_MESSAGE:
      return {
        ...state,
        error: action.error,
      };
    case RESET_ERROR_MESSAGE:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const logOut = () => (dispatch) => {
  dispatch(setAuthUserData(null, null, null, false));
};

export const logIn = (email, password) => (dispatch) => {
  AuthApi.login(email, password)
    .then((res) => {
      dispatch(setAuthUserData(res.user.uid, email, email, true));
    })
    .catch((err) => dispatch(sendErrorMessage(err)));
};

export const signup = (email, password) => (dispatch) => {
  AuthApi.signUp(email, password).then(() => {
    dispatch(setAuthUserData(0, email, 0, true));
  }).catch((err) => dispatch(sendErrorMessage(err)));
};
export const setAuthUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  data: {
    id, email, login, isAuth,
  },
});
const sendErrorMessage = (error) => ({ type: SEND_ERROR_MESSAGE, error });
export const resetErrorMessage = () => ({ type: RESET_ERROR_MESSAGE });

export default authReducer;
