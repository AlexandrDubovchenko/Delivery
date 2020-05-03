import React from 'react';
import { StyleSheet, View, Image, } from 'react-native';
import { Card, List, Text } from '@ui-kitten/components';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const DishesList = (props) => {

    const renderItemHeader = (headerProps, info) => (
        <View {...headerProps}>
            <Text category='h6'>
                {info.item.name}
            </Text>
        </View>
    );

    const renderItemFooter = (footerProps, info) => (
        <TouchableOpacity style={styles.orderButton} onPress={() => props.setBasketItem(info.item.name, info.item.img)}>
            <Text category='h6'>
                Заказать
        </Text>
        </TouchableOpacity>
    );



    const renderItem = (info) => (
        <Card
            style={styles.item}
            header={headerProps => renderItemHeader(headerProps, info)}
            footer={(footerProps) => renderItemFooter(footerProps, info)}
        >
            <Image style={styles.categoryImage} source={{ uri: info.item.img }} />
        </Card>
    );

    return (
        <List
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
            data={props.data}
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