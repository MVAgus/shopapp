import Categories from '../screens/categories/index';
import { NavigationContainer } from '@react-navigation/native';
import ProductDetail from '../screens/product-detail/index';
import Products from '../screens/products/index';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName='Categories' >
                <Stack.Screen name="Categories" component={Categories} options={{title: 'Home',
            headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },}} />
                <Stack.Screen name="Products" component={Products} />
                <Stack.Screen name="ProductDetail" component={ProductDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;