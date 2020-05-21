/* eslint-disable no-shadow */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { showMessage } from 'react-native-flash-message';
import FormInput from './Controlers/Input';
import { required, telefoneNumber } from '../../utilities/validation';
import { orderAPI } from '../../api';
import { resetBasket } from '../../redux/reducers/basket-reducer';
import OrderButton from '../Button';

const styles = StyleSheet.create({
  form: {
    flex: 3,
  },
  totalPrice: {
    marginHorizontal: 15,
    marginTop: 10,
    fontSize: 20,
    marginBottom: 30,
  },
});

export const OrderForm = ({
  handleSubmit, orderDishes, totalPrice, navigation, resetBasket, id,
}) => {
  const onSubmit = ({ name, address, telefone }) => {
    orderAPI.sendOrder({
      name, address, telefone, totalPrice, id, orderDishes,
    });
    showMessage({
      message: 'Ваш заказ отправлен, ожидайте звонка',
      type: 'success',
      duration: 9000,
      position: 'center',
    });
    navigation.navigate('HomeScreen');
    resetBasket();
  };
  return (
    <View category style={styles.form}>
      <Field placeholder="Имя" name="name" component={FormInput} validate={[required]} />
      <Field placeholder="Aдрес" name="address" component={FormInput} validate={[required]} />
      <Field placeholder="Телефон" name="telefone" component={FormInput} validate={[required, telefoneNumber]} />
      <Text style={styles.totalPrice}>
        Сумма заказа:
        {totalPrice}
        грн
      </Text>
      {orderDishes.length
        ? <OrderButton onSubmit={handleSubmit(onSubmit)} text="Отправить заказ" />
        : <Text>Вы ничего не заказали</Text>}
    </View>
  );
};

const OrderReduxForm = reduxForm({ form: 'order' })(OrderForm);


const mapStateToProps = (state) => ({
  orderDishes: state.basket.basketList,
  totalPrice: state.basket.totalPrice,
  id: state.auth.id,
});
export default connect(mapStateToProps, { resetBasket })(OrderReduxForm);
