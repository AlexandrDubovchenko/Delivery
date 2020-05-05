import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { resetFoundDishes } from '../../redux/reducers/list-reducer';
import DishesList from '../DishesList';
import { setBasketItem } from '../../redux/reducers/basket-reducer';

// eslint-disable-next-line no-shadow
const FoundDishesList = ({ listItems, resetFoundDishes, setBasketItem }) => {
  useEffect(() => () => {
    resetFoundDishes();
  }, []);

  return <DishesList setBasketItem={setBasketItem} data={listItems} />;
};
const mapStateToProps = (state) => ({
  listItems: state.list.foundDishes,
});

export default connect(mapStateToProps, { resetFoundDishes, setBasketItem })(FoundDishesList);
