import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Componentes
import Shopping from './Shopping/Shopping'
import Checkout from './Checkout/Checkout';





const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Shopping">
          <Stack.Screen name="Shopping" component={Shopping} options={{
          title: 'Shopping',
          headerStyle: {
            backgroundColor: '#760DF4',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 32
          },
          
        }}/>
          <Stack.Screen name="Checkout" component={Checkout} options={{
          title: 'Checkout',
          headerStyle: {
            backgroundColor: '#760DF4',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 32
          },
          
        }}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}