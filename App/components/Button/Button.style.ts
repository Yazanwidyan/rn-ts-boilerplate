import {StyleSheet} from 'react-native';

import {black_20, transparent} from '@APPNAME/constants';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: transparent,
    borderRadius: 16,
    height: 'auto',
    justifyContent: 'center',
    minHeight: 56,
    overflow: 'hidden',
  },
  overlayContainer: {
    backgroundColor: black_20,
    borderRadius: 15,
    height: '100%',
    position: 'absolute',
    width: '100%',
  },
  title: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    textAlign: 'center',
  },
});

export default styles;
