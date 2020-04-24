import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Card, List, Text } from '@ui-kitten/components';

const data = [
    {
        title: 'Pizza',
        img: 'https://easydine.ru/wp-content/uploads/2015/10/meksikanskaya-pitsa.jpg'
    },
    {
        title: 'Sushi',
        img: 'https://photo.in.ck.ua/article/5d10/ccba/c101/0514/e002/f4fa/de-skushtuvaty-ta-zamovyty-sushi-v-cherkasah.12@2x.jpeg'
    },
    {
        title: 'Burger',
        img: 'https://chpt.ru/files/images/burger_1.png'
    }
]

export const ListCustomItemShowcase = () => {

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
            onPress={() => console.log('here')}
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