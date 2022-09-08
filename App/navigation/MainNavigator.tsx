import {createStackNavigator} from '@react-navigation/stack';

import {HomeRoute} from './ScreenNames';
import {Home} from '@APPNAME/screens';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={HomeRoute} component={Home} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
