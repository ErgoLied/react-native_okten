import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {getUsers} from "../services/user.service";
import User from "./User";

const Users = (props) => {
    const {navigation} = props;

    const [users, setUsers] = useState();
    useEffect (()=>{
        getUsers().then(value => setUsers([...value]))
    },[]);

    return (<View style={styles.userBox}>
        <FlatList
            style={styles.users}
            data={users}
            renderItem={({item}) => <User item={item} nav={navigation}/>}
            keyExtractor={item => ''+item.id}
        />
    </View>);
};
export default Users;

const styles = StyleSheet.create({
    users: {
        flex: 1,
        width: '70%'
    },
    userBox: {
        alignItems: 'center'
    }
});