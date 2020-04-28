import React from 'react';
import { Text } from '@ui-kitten/components';
import { StyleSheet, View, Image } from 'react-native';
import { connect } from 'react-redux';

const ProfileInfo = (props) => {
    return (
        <View style={styles.profileInfo}>
            <Text>{props.email}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    profileInfo: {
        flex: 2,
    }
});

const mapStateToProps = (state) => {
    return {
        email: state.auth.email
    }

}

export default connect(mapStateToProps, null)(ProfileInfo) 