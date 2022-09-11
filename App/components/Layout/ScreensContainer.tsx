import {View, Text, SafeAreaView} from 'react-native';
import React, {useRef} from 'react';
import Toast from '../Toast/Toast';
import {getIsDarkMode} from '@APPNAME/redux/selectors/account.selectors';
import {useSelector} from 'react-redux';
import {backgroundDark, backgroundLight} from '@APPNAME/constants';

import styles from './ScreensContainer.style';

const ScreensContainer = ({children}) => {
  const toastRef = useRef<any>(null);
  const isDarkMode = useSelector(getIsDarkMode);
  return (
    <>
      <SafeAreaView
        style={[
          {backgroundColor: isDarkMode ? backgroundDark : backgroundLight},
          styles.container,
        ]}>
        {children}
      </SafeAreaView>
      <Toast controlRef={toastRef} />
    </>
  );
};

export default ScreensContainer;
