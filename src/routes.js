import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Componentes
import Home from './src/home/Home'
import ShoppingCart from './src/ShoppingCart/ShoppingCart'



const Stack = createStackNavigator();

export default function Routes() {

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}