import React from 'react';
import {SafeAreaView} from 'react-native';

import {Typography} from '@APPNAME/components';

import styles from './Welcome.style';

const Welcome = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Typography value={`welcome`} />
    </SafeAreaView>
  );
};

export default Welcome;
