import AuthNavigator from './auth';
import BottomTabsNavigator from './bottom-tab';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useSelector } from 'react-redux';

const AppNavigation = () => {
    const isAuth = useSelector(state => state.auth.userId);
    return (
        <NavigationContainer >
            {isAuth ? <BottomTabsNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    )
}

export default AppNavigation;