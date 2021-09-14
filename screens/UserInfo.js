import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity} from 'react-native';

const UserInfo = ({route: {params: {data}}}) => {
    return <View>
        <Text>name: {data.name}</Text>
        <Text>username: {data.username}</Text>
        <Text>email: {data.email}</Text>
        <Text>phone: {data.phone}</Text>
    </View>;
};
export default UserInfo;

const styles = StyleSheet.create({});