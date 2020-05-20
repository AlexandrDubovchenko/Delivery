/* eslint-disable no-shadow */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import SubmitButton from './Controlers/SubmitButton';
import FormInput from './Controlers/Input';
import { required, telefoneNumber } from '../../utilities/validation';
import { orderAPI } from '../../api';
import { resetBasket } from '../../redux/reducers/basket-reducer';

const styles = StyleSheet.create({
  form: {
    flex: 2,
  },
  totalPrice: {
    marginHorizontal: 15,
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
      <Field style={styles.formInput} placeholder="Имя" name="name" component={FormInput} validate={[required]} />
      <Field style={styles.formInput} placeholder="Aдрес" name="address" component={FormInput} validate={[required]} />
      <Field style={styles.formInput} placeholder="Телефон" name="telefone" component={FormInput} validate={[required, telefoneNumber]} />
      <Text style={styles.totalPrice}>
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

const OrderReduxForm = reduxForm({ form: 'order' })(OrderForm);


const mapStateToProps = (state) => ({
  orderDishes: state.basket.basketList,
  totalPrice: state.basket.totalPrice,
});
export default connect(mapStateToProps, { resetBasket })(OrderReduxForm);
