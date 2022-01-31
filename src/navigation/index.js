import CartStackNavigation from './cart';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import ShopStackNavigation from './shop';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomTabs = createBottomTabNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer >
            
        </NavigationContainer>
    )
}

export default AppNavigation;