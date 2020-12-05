import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Componentes
import Home from './src/Home/Home'
import ShoppingCart from './src/ShoppingCart/ShoppingCart'
import Checkout from './Checkout/Checkout';



const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Checkout" component={Checkout} />
          <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}