import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import Users from "./components/Users";
import Home from "./components/Home";
import UserInfo from "./screens/UserInfo";

const StackNavigator = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <StackNavigator.Navigator initialRouteName="Users">
                <StackNavigator.Screen name={'Home'} component={Home}/>
                <StackNavigator.Screen name={'Users'} component={Users}/>
                <StackNavigator.Screen name={'usrInfo'} component={UserInfo}/>
            </StackNavigator.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({});
