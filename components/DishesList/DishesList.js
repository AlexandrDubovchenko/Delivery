import React from 'react';
import { connect } from 'react-redux';
import { setBasketItem } from '../../redux/reducers/basket-reducer';
import DishesList from '../DishesList';


export const CategoryDishesList = ({
  // eslint-disable-next-line no-shadow
  allDishes, title, setBasketItem,
}) => {
  const listItems = allDishes.filter((dish) => dish.category === title.toLowerCase());
  return <DishesList setBasketItem={setBasketItem} data={listItems} />;
};

const mapStateToProps = (state) => (
  { allDishes: state.list.allDishes }
);

export default connect(mapStateToProps,
  { setBasketItem })(CategoryDishesList);
