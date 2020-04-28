import React, { useEffect } from 'react';
import { StyleSheet, View, Image, } from 'react-native';
import { Card, List, Text } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { getDishesData, resetCategoryListData } from '../../redux/reducers/list-reducer';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DishesList = (props) => {
    const data = props.listItems;
    useEffect(() => {
        props.getDishesData(props.title.toLowerCase());
    }, []);

    useEffect(() => {
        return () => {
            props.resetCategoryListData()
        }
    }, []);

    const renderItemHeader = (headerProps, info) => (
        <View {...headerProps}>
            <Text category='h6'>
                {info.item.title}
            </Text>
        </View>
    );

    const renderItemFooter = (footerProps) => (
        <TouchableOpacity style={styles.orderButton}>
            <Text category='h6'>
                Заказать
            </Text>
        </TouchableOpacity>
    );



    const renderItem = (info) => (
        <Card
            style={styles.item}
            header={headerProps => renderItemHeader(headerProps, info)}
            footer={renderItemFooter}
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
    },
    orderButton: {
        alignItems: "center",
        backgroundColor: "#FFD700"
    }
});

const mapStateToProps = (state) => {
    return {
        listItems: state.list.dishes
    }
}

export default connect(mapStateToProps, { getDishesData, resetCategoryListData })(DishesList)