import {createStackNavigator} from '@react-navigation/stack';

import {Welcome} from '@APPNAME/screens';
import {WelcomeRoute} from './ScreenNames';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={WelcomeRoute} component={Welcome} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
