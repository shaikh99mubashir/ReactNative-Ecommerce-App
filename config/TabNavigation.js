import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import MyAccount from '../Screens/MyAccount';
import Messages from '../Screens/Messages';
import Cart from '../Screens/Cart';
import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {backgroundColor: '#1E203B'},
          tabBarInactiveTintColor:'#2F5166',
          tabBarActiveTintColor:'#d6d5db'
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({color, size}) => <Icon name="home" size={size} color={color}/>,
          }}
        />
        <Tab.Screen
          name="Messages"
          component={Messages}
          options={{
            tabBarBadge:1,
            tabBarBadgeStyle:{backgroundColor:'#d6d5db'},
            tabBarIcon: ({color, size}) => <Icon name="message1" size={size} color={color} />,
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarBadge:1,
            tabBarBadgeStyle:{backgroundColor:'#d6d5db'},
            tabBarIcon: ({color, size}) => <Icon name="shoppingcart" size={size} color={color} />,
          }}
        />
        <Tab.Screen
          name="MyAccount"
          component={MyAccount}
          options={{
            tabBarIcon: ({color, size}) => <Icon name="setting" size={size} color={color}/>,
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default TabNavigation;
