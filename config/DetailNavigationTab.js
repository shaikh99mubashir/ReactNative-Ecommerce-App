import React from 'react'
import { View } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Details from '../Screens/Details';
import Cart from '../Screens/Cart';
import BuyNow from '../Screens/BuyNow';
import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();
const DetailNavigationTab = () => {
  return (
    <>
        <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        // tabBarIcon:false,
          tabBarStyle: {backgroundColor: '#1E203B'},
        }}
        >
        <Tab.Screen
             name="Details"
          component={Details}
          options={{
            
            tabBarIcon: ({color, size}) => <Icon name="home" size={20} color={color}/>,
          }}
        />
        <Tab.Screen
             name="BuyNow"
          component={BuyNow}
          options={{
            // tabBarIcon: ({color, size}) => <Icon name="home" size={size} color={color}/>,
          }}
        />
        <Tab.Screen
             name="cart"
          component={Cart}
          options={{
            // tabBarIcon: ({color, size}) => <Icon name="home" size={size} color={color}/>,
          }}
        />
        </Tab.Navigator>
    </>
  )
}

export default DetailNavigationTab