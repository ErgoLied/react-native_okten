import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import Users from "../components/Users";
import UserInfo from "./UserInfo";

const StackNavigator = createStackNavigator();


const UsersPageNav = () => {

    return (
        <StackNavigator.Navigator screenOptions={{headerShown: false}}
        >
            <StackNavigator.Screen name={'users'} component={Users} />
            <StackNavigator.Screen name={'usrInfo'} component={UserInfo}/>
        </StackNavigator.Navigator>
    )
};
export default UsersPageNav;

const styles = StyleSheet.create({});