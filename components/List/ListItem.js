import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export const ListItem = (props) => {
    return (
        <View style={styles.listItem}>
            <Text>Pizza</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
      flex: 1,
      borderWidth: 1,
      borderColor: "blue"
    },  
  });