import { ListApi } from "../../api";

const SET_DISHES_DATA = 'SET_DISHES_DATA';
const SET_CATEGORIES_LIST_DATA = 'SET_CATEGORIES_LIST_DATA';
const RESET_CATEGORY_LIST_DATA = "RESET_CATEGORY_LIST_DATA";
const SET_ALL_DISHES = 'SET_ALL_DISHES';

const initialState = {
    categoriesList: [],
    dishes: [],
    allDishes: []
}

const listReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_DISHES_DATA:
            return {
                ...state,
                dishes: [...action.data]
            }
        case SET_CATEGORIES_LIST_DATA:
            return {
                ...state,
                categoriesList: [...action.data]
            }
        case RESET_CATEGORY_LIST_DATA:
            console.log('reset');

            return {
                ...state,
                dishes: [],
            }
        case SET_ALL_DISHES:
            return {
                ...state,
                allDishes: [...action.data]
            }
        default:
            return state;
    }
}

export const getCategoriestData = () => {
    return (dispatch) => {
        ListApi.getCategories().then((querySnapshot) => {
            const data = []
            querySnapshot.forEach((doc) => {
                data.push(doc.data())
            })
            dispatch(setCategoriesListData(data))

        })
    }
}
export const getDishesData = (categoryName) => {
    return (dispatch) => {
        ListApi.getDishes(categoryName).then((querySnapshot) => {
            const data = []
            querySnapshot.forEach((doc) => {
                data.push(doc.data())
            })
            dispatch(setDishesData(data))

        })
    }
}
export const getAllDishes = () => {
    return (dispatch) => {
        ListApi.getCategories().then((querySnapshot) => {
            const data = []
            querySnapshot.forEach((doc) => {
                ListApi.getDishes(doc.data().title.toLowerCase()).then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        data.push({ title: doc.data().name })
                    })
                    dispatch(setAllDishes(data))
                })

            })

        })
    }
}

export const setCategoriesListData = (data) => ({ type: SET_CATEGORIES_LIST_DATA, data });
export const setDishesData = (data) => ({ type: SET_DISHES_DATA, data });
export const resetCategoryListData = () => ({ type: RESET_CATEGORY_LIST_DATA });
const setAllDishes = (data) => ({ type: SET_ALL_DISHES, data })
export default listReducer;
