import { combineReducers, createStore, applyMiddleware } from "redux";
import authReducer from "./reducers/auth-reducer";
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
    auth: authReducer,
    form: formReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store