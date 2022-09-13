import React, {FC} from 'react';
import {StatusBar, View} from 'react-native';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {transparent} from '@APPNAME/constants';
import {GlobalStyles} from '@APPNAME/utils';
import {AppProps} from '@types';

import Navigation from './navigation';
import {persistor, store} from './redux/store';
import './i18n';
import {PersistGate} from 'redux-persist/integration/react';

const App: FC<AppProps> = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
      </PersistGate>
    </Provider>
  );
};

export default App;
