/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Card, List, Text } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { getCategoriestData, getAllDishes } from '../../redux/reducers/list-reducer';

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
});

const CategoriesList = ({
  listItems, navigation, getCategoriestData, getAllDishes,
}) => {
  const data = listItems;
  useEffect(() => {
    getCategoriestData('categoriesList');
    getAllDishes();
  }, []);


  const renderItemHeader = (headerProps, info) => (
    <View {...headerProps}>
      <Text category="h6">
        {info.item.title}
      </Text>
    </View>
  );


  const renderItem = (info) => (
    <Card
      style={styles.item}
      header={(headerProps) => renderItemHeader(headerProps, info)}
      onPress={() => navigation.navigate('DishesScreen', { title: info.item.title })}
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
  listItems: state.list.categoriesList,
});

export default connect(mapStateToProps, { getCategoriestData, getAllDishes })(CategoriesList);
