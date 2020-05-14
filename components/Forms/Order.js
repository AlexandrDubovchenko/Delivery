/* eslint-disable no-shadow */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import SubmitButton from './Controlers/SubmitButton';
import FormInput from './Controlers/Input';
import required from '../../utilities/validation';
import { orderAPI } from '../../api';
import { resetBasket } from '../../redux/reducers/basket-reducer';

const styles = StyleSheet.create({
  form: {
    flex: 2,
  },
  error: {
    color: 'red',
  },
  errorContainer: {
    alignSelf: 'center',
  },
});


export const OrderForm = ({
  handleSubmit, orderDishes, totalPrice, navigation, resetBasket,
}) => {
  const onSubmit = ({ name, address, telefone }) => {
    orderAPI.sendOrder({
      name, address, telefone, totalPrice,
    });
    navigation.navigate('HomeScreen');
    resetBasket();
  };
  return (
    <View style={styles.form}>
      <Field placeholder="Имя" name="name" component={FormInput} validate={[required]} />
      <Field placeholder="Aдрес" name="address" component={FormInput} validate={[required]} />
      <Field placeholder="Телефон" name="telefone" component={FormInput} validate={[required]} />
      <Text>
        Сумма заказа:
        {totalPrice}
        грн
      </Text>
      {orderDishes.length
        ? <SubmitButton onSubmit={handleSubmit(onSubmit)} text="Отправить заказ" />
        : <Text>Вы ничего не заказали</Text>}
    </View>
  );
};

const OrderReduxForm = reduxForm({ form: 'signIn' })(OrderForm);


const mapStateToProps = (state) => ({
  orderDishes: state.basket.basketList,
  totalPrice: state.basket.totalPrice,
});
export default connect(mapStateToProps, { resetBasket })(OrderReduxForm);
