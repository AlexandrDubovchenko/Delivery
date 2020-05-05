/* eslint-disable no-use-before-define */
import { ListApi } from '../../api';

const SET_DISHES_DATA = 'SET_DISHES_DATA';
const SET_CATEGORIES_LIST_DATA = 'SET_CATEGORIES_LIST_DATA';
const RESET_CATEGORY_LIST_DATA = 'RESET_CATEGORY_LIST_DATA';
const SET_ALL_DISHES = 'SET_ALL_DISHES';
const SET_FOUND_DISHES = 'SET_FOUND_DISHES';
const RESET_FOUND_DISHES = 'RESET_FOUND_DISHES';

const initialState = {
  categoriesList: [],
  dishes: [],
  allDishes: [],
  foundDishes: [],
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DISHES_DATA:
      return {
        ...state,
        dishes: [...action.data],
      };
    case SET_CATEGORIES_LIST_DATA:
      return {
        ...state,
        categoriesList: [...action.data],
      };
    case RESET_CATEGORY_LIST_DATA:
      return {
        ...state,
        dishes: [],
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
    dispatch(setCategoriesListData(data));
  });
};
export const getDishesData = (categoryName) => (dispatch) => {
  ListApi.getDishes(categoryName).then((querySnapshot) => {
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    dispatch(setDishesData(data));
  });
};
export const getAllDishes = () => (dispatch) => {
  ListApi.getCategories().then((querySnapshot) => {
    const data = [];
    querySnapshot.forEach((category) => {
      ListApi.getDishes(category.data().title.toLowerCase()).then((dishes) => {
        dishes.forEach((dish) => {
          data.push({ title: dish.data().name, category: category.data().title.toLowerCase() });
        });
        dispatch(setAllDishes(data));
      });
    });
  });
};

export const findDishes = (dishName, categoryName) => (dispatch) => {
  ListApi.findDishes(dishName, categoryName).then((querySnapshot) => {
    dispatch(setFoundDishes(querySnapshot.data()));
  });
};

export const setCategoriesListData = (data) => ({ type: SET_CATEGORIES_LIST_DATA, data });
export const setDishesData = (data) => ({ type: SET_DISHES_DATA, data });
export const resetCategoryListData = () => ({ type: RESET_CATEGORY_LIST_DATA });
export const resetFoundDishes = () => ({ type: RESET_FOUND_DISHES });
const setAllDishes = (data) => ({ type: SET_ALL_DISHES, data });
const setFoundDishes = (data) => ({ type: SET_FOUND_DISHES, data });
export default listReducer;
