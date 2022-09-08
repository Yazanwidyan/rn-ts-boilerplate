import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
export * from './ScreenNames';

import AppNavigator from './AppNavigator';

export default function Navigation() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
