import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { resetFoundDishes } from '../../redux/reducers/list-reducer';
import { DishesList } from '../DishesList';
import { setBasketItem } from '../../redux/reducers/basket-reducer';


const FoundDishesList = (props) => {
    useEffect(() => {
        return () => {
            props.resetFoundDishes()
        }
    }, []);

    return <DishesList setBasketItem={props.setBasketItem} data={props.listItems} />
}
const mapStateToProps = (state) => {
    return {
        listItems: state.list.foundDishes
    }
}

export default connect(mapStateToProps, { resetFoundDishes, setBasketItem })(FoundDishesList)