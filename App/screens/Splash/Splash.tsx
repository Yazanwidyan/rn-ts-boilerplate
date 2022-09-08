import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Typography} from '@APPNAME/components';

import styles from './Splash.style';
import {RootRoute} from '@APPNAME/navigation';
import {black} from '@APPNAME/constants';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(RootRoute);
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Typography
        variant="headline"
        color={black}
        value={'splash'}
        lineHeight={18}
      />
    </SafeAreaView>
  );
};

export default Splash;
