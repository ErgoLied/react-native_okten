import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from "./components/Home";
import UsersPageNav from "./screens/UsersPageNav";

const BottomTabs = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <BottomTabs.Navigator
                tabBarOption={{tabStyle: {flex: 1, alignItems: 'center', justifyContent: 'center'}}}
                screenOptions={{tabBarActiveTintColor: '#ad8aff'}}>

                <BottomTabs.Screen name={'users'} component={UsersPageNav} options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="account-outline" color={color} size={size}/>
                    )
                }}/>
                <BottomTabs.Screen name={'home'} component={Home} options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="home" color={color} size={size}/>
                    )
                }}/>

            </BottomTabs.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({});
