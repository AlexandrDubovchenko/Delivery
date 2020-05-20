import React, { useEffect } from 'react';
import { Divider, List, ListItem } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { getOrders } from '../../../redux/reducers/profile-reducer';

// eslint-disable-next-line no-shadow
const OrdersList = ({ id, orders, getOrders }) => {
  useEffect(() => {
    getOrders(id);
  }, []);
  const renderItem = ({ item }) => (
    <ListItem
      title={`${item.address}`}
      description={`
        Имя: ${item.name}
        Телефон: ${item.telefone}
        Блюда: ${item.orderDishes.map((dish) => dish.name)}
        Стоимость: ${item.totalPrice} грн
      `}
    />
  );

  return (
    <List
      data={orders}
      ItemSeparatorComponent={Divider}
      renderItem={renderItem}
    />
  );
};
const mapStateToProps = (state) => ({
  orders: state.profile.orders,
  id: state.auth.id,
});
export default connect(mapStateToProps, { getOrders })(OrdersList);
