import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getDishesData, resetCategoryListData } from '../../redux/reducers/list-reducer';
import { setBasketItem } from '../../redux/reducers/basket-reducer';
import { DishesList } from '../DishesList';

const CategoryDishesList = (props) => {
    useEffect(() => {
        props.getDishesData(props.title.toLowerCase());
    }, []);

    useEffect(() => {
        return () => {
            props.resetCategoryListData()
        }
    }, []);

    return <DishesList setBasketItem={props.setBasketItem} data={props.listItems} />
};

const mapStateToProps = (state) => {
    return {
        listItems: state.list.dishes
    }
}

export default connect(mapStateToProps, { getDishesData, resetCategoryListData, setBasketItem })(CategoryDishesList)