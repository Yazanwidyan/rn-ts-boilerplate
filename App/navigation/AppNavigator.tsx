import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import RootNavigator from './RootNavigator';
import {RootRoute, SplashRoute} from './ScreenNames';
import {Splash} from '@APPNAME/screens';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={SplashRoute} component={Splash} />
      <Stack.Screen name={RootRoute} component={RootNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
