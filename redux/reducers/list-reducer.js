/* eslint-disable no-use-before-define */
import { AsyncStorage } from 'react-native';
import { ListApi } from '../../api';

const SET_CATEGORIES_LIST_DATA = 'SET_CATEGORIES_LIST_DATA';
const SET_ALL_DISHES = 'SET_ALL_DISHES';
const SET_FOUND_DISHES = 'SET_FOUND_DISHES';
const RESET_FOUND_DISHES = 'RESET_FOUND_DISHES';

const setItemToStorage = async (key, value) => {
  await AsyncStorage.setItem(key, JSON.stringify(value));
};
const getItemFromStorage = async (key, dispatch, dispatchAction) => {
  const value = await AsyncStorage.getItem(key);
  if (value !== null) {
    dispatch(dispatchAction(JSON.parse(value)));
  }
};
const initialState = {
  categoriesList: [],
  dishes: [],
  allDishes: [],
  foundDishes: [],
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES_LIST_DATA:
      return {
        ...state,
        categoriesList: [...action.data],
      };
    case RESET_FOUND_DISHES:
      return {
        ...state,
        foundDishes: [],
      };
    case SET_ALL_DISHES:
      return {
        ...state,
        allDishes: [...action.data],
      };
    case SET_FOUND_DISHES:
      return {
        ...state,
        foundDishes: [action.data],
      };
    default:
      return state;
  }
};


export const getCategoriestData = () => (dispatch) => {
  ListApi.getCategories().then((querySnapshot) => {
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    // dispatch(setCategoriesListData(data));
    if (data.length > 0) {
      setItemToStorage('categoriesList', data);
    }
    getItemFromStorage('categoriesList', dispatch, setCategoriesListData);
  });
};

export const getAllDishes = () => (dispatch) => {
  ListApi.getCategories().then((querySnapshot) => {
    const data = [];
    querySnapshot.forEach((category) => {
      ListApi.getDishes(category.data().title.toLowerCase()).then((dishes) => {
        dishes.forEach((dish) => {
          data.push({ ...dish.data(), category: category.data().title.toLowerCase() });
        });
        if (data.length > 0) {
          setItemToStorage('allDishes', data);
        }
      });
    });
    getItemFromStorage('allDishes', dispatch, setAllDishes);
  });
};

export const setCategoriesListData = (data) => ({ type: SET_CATEGORIES_LIST_DATA, data });
export const resetFoundDishes = () => ({ type: RESET_FOUND_DISHES });
const setAllDishes = (data) => ({ type: SET_ALL_DISHES, data });
export const setFoundDishes = (data) => ({ type: SET_FOUND_DISHES, data });
export default listReducer;
