import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity} from 'react-native';

const UserInfo = ({route: {params: {data}}, navigation}) => {
    return <View>
        <Text>name: {data.name}</Text>
        <Text>username: {data.username}</Text>
        <Text>email: {data.email}</Text>
        <Text>phone: {data.phone}</Text>
        <Button
            title="Go back"
            color='#ad8aff'
            onPress={() => navigation.navigate('userslist')}
        />
    </View>;
};
export default UserInfo;

const styles = StyleSheet.create({});