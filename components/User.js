import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity} from 'react-native';

const User = ({item}) => {
    return <View style={styles.userBox}>
        <Text>{item.id} {item.name}</Text>
    </View>;
};
export default User;

const styles = StyleSheet.create({
    userBox: {
        flex: 1,
        backgroundColor: 'aliceblue',
        marginBottom: 3,
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,   //for mobile
        padding: 50    //for PC
    }
});