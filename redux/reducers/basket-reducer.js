import { ListApi } from "../../api";

const SET_BASKET_ITEM = 'SET_BASKET_ITEM ';
const REMOVE_BASKET_ITEM = 'REMOVE_BASKET_ITEM'; 
const CHANGE_ITEM_NUMBER = 'CHANGE_ITEM_NUMBER'

const initialState = {
    basketList: [],

}

const basketReducer = (state = initialState, action) => {

    switch (action.type) {        
       case SET_BASKET_ITEM:
           if (state.basketList.find(el => el.name === action.name)) {
            state.basketList.find(el => el.name === action.name).number++
            return  {
                ...state,
                basketList: [...state.basketList]
            } 
           }
           return {
               ...state,
               basketList: [...state.basketList, {name: action.name, number: 1, img: action.img}]
           }
           case REMOVE_BASKET_ITEM:
            state.basketList.splice(state.basketList.indexOf(state.basketList.find(el => el.name === action.name)), 1)              
            return {
                ...state,
                basketList: [...state.basketList]
            }
            case CHANGE_ITEM_NUMBER:
                action.add ? state.basketList.find(el => el.name === action.name).number++ : 
                state.basketList.find(el => el.name === action.name && el.number>0).number--
                return  {
                    ...state,
                    basketList: [...state.basketList]
                } 

        
        default:
            return state;
    }
}


export const setBasketItem = (name, img) => ({type: SET_BASKET_ITEM, name, img}) 
export const removeBasketItem = (name) => ({type: REMOVE_BASKET_ITEM, name}) 
export const changeItemNumber = (name, add=true) => ({type: CHANGE_ITEM_NUMBER, name, add}) 


export default basketReducer;
