/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Card, List, Text } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { changeItemNumber, removeBasketItem } from '../../redux/reducers/basket-reducer';

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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  footer_number: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footer_controlers: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  footer_number_control: {
    fontSize: 40,
  },

});

// eslint-disable-next-line no-shadow
const BasketList = ({ listItems, changeItemNumber, removeBasketItem }) => {
  const data = listItems;

  const renderItemHeader = (headerProps, info) => (
    <View style={styles.header}>
      <Text category="h6">
        {info.item.name}
      </Text>
      <TouchableOpacity onPress={() => removeBasketItem(info.item.name)}>
        <Text>Удалить</Text>
      </TouchableOpacity>
    </View>
  );

  const renderItemFooter = (footerProps, info) => (
    <View style={styles.footer}>
      <View style={styles.footer_number}>
        <Text>Кол-во:</Text>
        <Text>{info.item.number}</Text>
      </View>
      <View style={styles.footer_controlers}>
        <TouchableOpacity onPress={() => changeItemNumber(info.item.name)}>
          <Text style={styles.footer_number_control}>+</Text>
        </TouchableOpacity>
        {info.item.number > 1
          && (
            <TouchableOpacity onPress={() => changeItemNumber(info.item.name, false)}>
              <Text style={styles.footer_number_control}>-</Text>
            </TouchableOpacity>
          )}
      </View>

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

const mapStateToProps = (state) => ({
  listItems: state.basket.basketList,
});


export default connect(mapStateToProps, { changeItemNumber, removeBasketItem })(BasketList);
