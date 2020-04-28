import { AuthApi } from "../../api";

const SET_USER_DATA = 'SET-USER-DATA';

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        default:
            return state;
    }
}

export const logOut = () => {
    return (dispatch) => {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export const logIn = (email, password) => {
    return (dispatch) => {
        AuthApi.login(email, password).then(res => {
            dispatch(setAuthUserData(0, email, 0, true))
        }).catch(res => console.log('error'))
    }
}

export const signup = (email, password) => {
    return (dispatch) => {
        AuthApi.signUp(email, password).then(res => {
            dispatch(setAuthUserData(0, email, 0, true))
        }).catch(err => console.log(err))
    }
}
export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, data: { id, email, login, isAuth } });


export default authReducer;
