import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Componentes
import Shopping from './Shopping/Shopping'





const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Shopping">
          <Stack.Screen name="Shopping" component={Shopping}/>


        </Stack.Navigator>
    </NavigationContainer>
  );
}