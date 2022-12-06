import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Detail from '../Screens/Details';
import Home from '../Screens/Home';
import Login from '../Screens/Login';
import Signup from '../Screens/Signup';
import DetailNavigationTab from './DetailNavigationTab';
import TabNavigation from './TabNavigation';


const Stack = createNativeStackNavigator();
function Navigation() {
  return (
    <>
      {/* <NavigationContainer> */}
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="HomeScreen" component={TabNavigation} />
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          {/* <TabNavigation/> */}
        </Stack.Navigator>
      {/* </NavigationContainer> */}
    </>
  );
}

export default Navigation;
