import { combineReducers, createStore, applyMiddleware } from "redux";
import authReducer from "./reducers/auth-reducer";
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from "redux-thunk";
import listReducer from "./reducers/list-reducer";

const reducers = combineReducers({
    auth: authReducer,
    form: formReducer,
    list: listReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store