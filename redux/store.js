import { combineReducers, createStore, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk';
import authReducer from './reducers/auth-reducer';
import listReducer from './reducers/list-reducer';
import basketReducer from './reducers/basket-reducer';
import profileReducer from './reducers/profile-reducer';

const reducers = combineReducers({
  auth: authReducer,
  form: formReducer,
  list: listReducer,
  basket: basketReducer,
  profile: profileReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
