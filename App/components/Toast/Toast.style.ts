import {StyleSheet} from 'react-native';

import {error, white} from '@APPNAME/constants';
import {width} from '@APPNAME/utils';

const styles = StyleSheet.create({
  ToastContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: error,
    borderRadius: 8,
    bottom: 15,
    justifyContent: 'center',
    overflow: 'hidden',
    paddingHorizontal: 16,
    paddingVertical: 12,
    position: 'absolute',
    width: width - 24,
  },
  txt: {
    color: white,
    textAlign: 'center',
  },
});

export default styles;
