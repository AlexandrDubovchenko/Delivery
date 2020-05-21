import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { Text } from '@ui-kitten/components';

const styles = StyleSheet.create({
  orderButton: {
    alignItems: 'center',
    backgroundColor: '#FFD700',
    marginHorizontal: 15,
  },
});

const OrderButton = ({ onSubmit, text }) => (
  <TouchableOpacity
    style={styles.orderButton}
    onPress={onSubmit}
  >
    <Text category="h5">{text}</Text>
  </TouchableOpacity>
);

export default OrderButton;
