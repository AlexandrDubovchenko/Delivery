import React, { useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Card, List, Text } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { getCategoriestData } from '../../redux/reducers/list-reducer';

const CategoriesList = (props) => {

    const data = props.listItems
    useEffect(() => {
        props.getCategoriestData("categoriesList");
    }, [])
    const renderItemHeader = (headerProps, info) => (
        <View {...headerProps}>
            <Text category='h6'>
                {info.item.title}
            </Text>
        </View>
    );


    const renderItem = (info) => (
        <Card
            style={styles.item}
            header={headerProps => renderItemHeader(headerProps, info)}
            onPress={() => props.navigation.navigate("DishesScreen", { title: info.item.title })}
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

const styles = StyleSheet.create({
    contentContainer: {
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    item: {
        marginVertical: 4,

    },
    categoryImage: {
        height: 200
    }
});

const mapStateToProps = (state) => {
    return {
        listItems: state.list.categoriesList
    }
}

export default connect(mapStateToProps, { getCategoriestData })(CategoriesList)