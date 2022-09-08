import React from 'react';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthRoute, MainRoute} from './ScreenNames';

const Stack = createStackNavigator();

const RootNavigator = () => {
  const isLoggedIn = true;

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isLoggedIn ? (
        <Stack.Screen name={MainRoute} component={MainNavigator} />
      ) : (
        <Stack.Screen name={AuthRoute} component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
