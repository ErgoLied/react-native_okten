import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import About from "./About";
import Article from "./Article";

const Drawer = createDrawerNavigator();

const Home = () => {
    return (
    <Drawer.Navigator>
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
    )
};
export default Home;

const styles = StyleSheet.create({});