import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabsNavigation from './Tabs';
import About from '../pages/About';
import Contact from '../pages/Contact';

const Stack = createNativeStackNavigator(); 

const StackNavigation = () => {
  return ( 
    <Stack.Navigator initialRouteName="Tabs">
      <Stack.Screen
        name="Tabs"
        component={TabsNavigation}
      />
      <Stack.Screen
        name="About"
        component={About}
      />
      <Stack.Screen
        name="Contact"
        component={Contact}
      />
    </Stack.Navigator>
  );
}
export default StackNavigation;