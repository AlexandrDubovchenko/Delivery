import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getDishesData, resetCategoryListData } from '../../redux/reducers/list-reducer';
import { setBasketItem } from '../../redux/reducers/basket-reducer';
import DishesList from '../DishesList';


const CategoryDishesList = ({
  // eslint-disable-next-line no-shadow
  listItems, title, resetCategoryListData, getDishesData, setBasketItem,
}) => {
  useEffect(() => {
    getDishesData(title.toLowerCase());
  }, []);

  useEffect(() => (
    () => {
      resetCategoryListData();
    }
  ), []);

  return <DishesList setBasketItem={setBasketItem} data={listItems} />;
};

const mapStateToProps = (state) => (
  { listItems: state.list.dishes }
);

export default connect(mapStateToProps,
  { getDishesData, resetCategoryListData, setBasketItem })(CategoryDishesList);
