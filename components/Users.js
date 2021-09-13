import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {getUsers} from "../services/user.service";
import User from "./User";

const Users = () => {
    const [users, setUsers] = useState();
    useEffect (()=>{
        getUsers().then(value => setUsers([...value]))
    },[]);
    return <View style={styles.users}>
        <FlatList
            data={users}
            renderItem={({item}) => <User item={item}/>}
            keyExtractor={item => ''+item.id}
        />
    </View>;
};
export default Users;

const styles = StyleSheet.create({
    users: {
        flex: 1,
        width: '70%'
    }
});