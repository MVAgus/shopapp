import {COLORS} from '../../utils/constants/colors';
import Cart from "../../screens/cart";
import { Platform } from "react-native";
import React from "react";

const Stack = createNativeStackNavigator();

const CartStackNavigation = () => {
    return (
        
            <Stack.Navigator initialRouteName='Cart'
             screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? COLORS.primary : '',
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }} >
                
                <Stack.Screen 
                name="Cart" 
                component={Cart}
                />
            </Stack.Navigator>
        
    )
}

export default CartStackNavigation;