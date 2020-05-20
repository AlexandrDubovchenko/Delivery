/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Card, List, Text } from '@ui-kitten/components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { showMessage } from 'react-native-flash-message';

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  item: {
    marginVertical: 4,

  },
  categoryImage: {
    height: 200,
  },
  orderButton: {
    alignItems: 'center',
    backgroundColor: '#FFD700',
  },
  price: {
    fontSize: 20,
    marginBottom: 30,
  },
});

const DishesList = ({ data, setBasketItem }) => {
  const renderItemHeader = (headerProps, info) => (
    <View {...headerProps}>
      <Text category="h6">
        {info.item.name}
      </Text>
    </View>
  );

  const renderItemFooter = (footerProps, info) => (
    <View {...footerProps}>
      <Text style={styles.price}>
        Цена:
        {info.item.price}
        грн
      </Text>
      <TouchableOpacity
        style={styles.orderButton}
        onPress={() => {
          setBasketItem(info.item.name, info.item.img, info.item.price);
          showMessage({
            message: `${info.item.name} добавлено в Корзину`,
            type: 'default',
            duration: 6000,
          });
        }}
      >
        <Text category="h5">
          Заказать
        </Text>
      </TouchableOpacity>
    </View>

  );


  const renderItem = (info) => (
    <Card
      style={styles.item}
      header={(headerProps) => renderItemHeader(headerProps, info)}
      footer={(footerProps) => renderItemFooter(footerProps, info)}
    >
      <Image style={styles.categoryImage} source={{ uri: info.item.img }} />
    </Card>
  );

  return (
    <List
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={data}
      renderItem={renderItem}
    />
  );
};

export default DishesList;
