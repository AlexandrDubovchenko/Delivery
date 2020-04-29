import React, { useEffect } from 'react';
import { StyleSheet, View, Image, } from 'react-native';
import { Card, List, Text } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { resetFoundDishes } from '../../redux/reducers/list-reducer';
import { TouchableOpacity } from 'react-native-gesture-handler';

const FoundDishesList = (props) => {
    const data = props.listItems;

    useEffect(() => {
        return () => {
            props.resetFoundDishes()
        }
    }, []);

    const renderItemHeader = (headerProps, info) => (
        <View {...headerProps}>
            <Text category='h6'>
                {info.item.name}
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
        listItems: state.list.foundDishes
    }
}

export default connect(mapStateToProps, { resetFoundDishes })(FoundDishesList)