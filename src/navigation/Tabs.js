import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from '../pages/Home';
import Info from '../pages/Info';
import Settings from '../pages/Settings';

const Tabs = createBottomTabNavigator();

const icons = {
  Home: {
    name: 'home'
  },
  Info: {
    name: 'information-circle'
  },
  Settings: {
    name: 'settings'
  },
}

const TabsNavigation = () => {
  return (    
    <Tabs.Navigator 
          initialRouteName="Home"
          screenOptions={ ({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              const { name } = icons[route.name];
              return <Ionicons name={name} color={color} size={size} />
            },
			      tabBarStyle: {
              backgroundColor: 'black'
            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'gray',            
            
            headerStyle: {
              backgroundColor: 'black'
            },
            headerTintColor: 'white',
          })          
          }                 
		      >
          <Tabs.Screen
            name="Home"
            component={Home}
          />
          <Tabs.Screen
            name="Info"
            component={Info}
			      options={{
                tabBarBadge:3,
                //headerShown: false
            }}
          />
          <Tabs.Screen
            name="Settings"
            component={Settings}
          />
        </Tabs.Navigator>     
  );
}
export default TabsNavigation;