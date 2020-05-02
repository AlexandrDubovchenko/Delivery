import React, { useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Card, List, Text } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { changeItemNumber, removeBasketItem } from '../../redux/reducers/basket-reducer';


const BasketList = (props) => {
    const data = props.listItems;
    const renderItemHeader = (headerProps, info) => (
        <View {...headerProps}>
            <Text category='h6'>
                {info.item.name}
            </Text>
        </View>
    );

    const renderItemFooter = (footerProps, info) => (
        <View style={styles.footer}>
            <View style={styles.footer_number}>
                <Text>Кол-во {info.item.number}</Text>
                <TouchableOpacity onPress={()=>props.changeItemNumber(info.item.name)}>
                    <Text style={styles.footer_number_controls}>+</Text>
                </TouchableOpacity>
                {info.item.number > 1 &&
                    <TouchableOpacity onPress={()=>props.changeItemNumber(info.item.name, false)}>
                        <Text style={styles.footer_number_controls}>-</Text>
                    </TouchableOpacity>
                }
            </View>
            <View style={styles.footer_delete}>
                <TouchableOpacity onPress={()=>props.removeBasketItem(info.item.name)}>
                    <Text>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>

    );

    const renderItem = (info) => (
        <Card
            style={styles.item}
            header={headerProps => renderItemHeader(headerProps, info)}
            footer={footerProps => renderItemFooter(footerProps, info)}
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
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: 40,
        alignItems: "center"

    },
    footer_number: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    footer_delete: {
        flex: 1,
        alignItems: "flex-end"
    },
    footer_number_controls: {
        fontSize: 30
    }

});

const mapStateToProps = (state) => {
    return {
        listItems: state.basket.basketList
    }
}


export default connect(mapStateToProps, {changeItemNumber, removeBasketItem})(BasketList)