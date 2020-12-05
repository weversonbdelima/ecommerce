import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Componentes
<<<<<<< HEAD
import Shopping from './Shopping/Shopping'

=======
import Home from './src/Home/Home'
import ShoppingCart from './src/ShoppingCart/ShoppingCart'
import Checkout from './Checkout/Checkout';
>>>>>>> 3599f42398c9b810618435668f6232472d9623bf



const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
<<<<<<< HEAD
        <Stack.Navigator initialRouteName="Shopping">
          <Stack.Screen name="Shopping" component={Shopping}/>


=======
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Checkout" component={Checkout} />
          <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
>>>>>>> 3599f42398c9b810618435668f6232472d9623bf
        </Stack.Navigator>
    </NavigationContainer>
  );
}