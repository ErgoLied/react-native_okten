import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity} from 'react-native';

const User = ({item, nav: {navigate}}) => {
    const onPress = () => {
        navigate('usrInfo', {data: item});
    }

    return <View>
        <Text style={styles.userBox}>{item.id} - {item.name}</Text>
        <Button title={'user info'} onPress={onPress} color='#ad8aff'/>
    </View>;
};
export default User;

const styles = StyleSheet.create({
    userBox: {
        flex: 1,
        margin: 10,
        textAlign: 'center'
    }
});