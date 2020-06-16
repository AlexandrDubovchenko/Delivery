/* eslint-disable global-require */
/* eslint-disable no-shadow */
import React, { useState } from 'react';
import {
  StyleSheet, View, Text, Image,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
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
  mapButton: {
    flex: 1,
    position: 'absolute',
    right: 30,
    top: 7,
  },
  mapIcon: {
    width: 30,
    height: 40,
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

  const [address, setAddress] = useState('');
  return (
    <View category style={styles.form}>
      <Field placeholder="Имя" name="name" component={FormInput} validate={[required]} />
      <View>
        <Field placeholder="Aдрес" name="address" props={{ value: address }} component={FormInput} validate={[required]} />
        <View style={styles.mapButton}>
          <TouchableOpacity onPress={() => navigation.navigate('MapScreen', { setAddress })}>
            <Image style={styles.mapIcon} source={require('../../assets/Orders/map_icon.png')} />
          </TouchableOpacity>
        </View>
      </View>


      <Field placeholder="Телефон" name="telefone" component={FormInput} validate={[required, telefoneNumber]} />
      <Text style={styles.totalPrice}>
        Сумма заказа:
        {totalPrice}
        грн
      </Text>
      {orderDishes.length
        ? <OrderButton onSubmit={handleSubmit(onSubmit)} text="Отправить заказ" />
        : <Text style={styles.totalPrice}>Вы ничего не заказали</Text>}
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
