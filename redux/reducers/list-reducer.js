import { ListApi } from "../../api";

const SET_CATEGORY_LIST_DATA = 'SET_CATEGORY_LIST_DATA';
const SET_CATEGORIES_LIST_DATA = 'SET_CATEGORIES_LIST_DATA';
const RESET_CATEGORY_LIST_DATA = "RESET_CATEGORY_LIST_DATA";

const initialState = {
    categoriesList: [],
    categoryList: []
}

const listReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_CATEGORY_LIST_DATA:
            return {
                ...state,
                categoryList: [...action.data]
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
                categoryList: []
            }
        default:
            return state;
    }
}

export const getListData = (listName) => {

    return (dispatch) => {
        ListApi.getList(listName).then((querySnapshot) => {
            const data = []
            querySnapshot.forEach((doc) => {
                data.push(doc.data())
            })
            if (listName === "categoriesList") {
                dispatch(setCategoriesListData(data))
            } else {
                dispatch(setCategoryListData(data))
            }

        })
    }

}

export const setCategoriesListData = (data) => ({ type: SET_CATEGORIES_LIST_DATA, data });
export const setCategoryListData = (data) => ({ type: SET_CATEGORY_LIST_DATA, data });
export const resetCategoryListData = () => ({ type: RESET_CATEGORY_LIST_DATA })
export default listReducer;
