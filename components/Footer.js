import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';

export const Footer = () => {
    return (
        <View style={styles.footer}>
            <TouchableOpacity>
                <Text>Список</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Поиск</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Кабинет</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-around",
      borderWidth: 1,
      borderColor: "blue"
    },
  });