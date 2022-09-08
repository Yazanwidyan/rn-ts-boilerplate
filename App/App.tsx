import React, {FC} from 'react';
import {StatusBar, View} from 'react-native';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {transparent} from '@APPNAME/constants';
import {GlobalStyles} from '@APPNAME/utils';
import {AppProps} from '@types';

import Navigation from './navigation';
import {store} from './redux/store';
import './i18n';

const App: FC<AppProps> = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <View style={[GlobalStyles.fill]}>
          <StatusBar
            translucent
            backgroundColor={transparent}
            barStyle="dark-content"
          />
          <Navigation />
        </View>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
