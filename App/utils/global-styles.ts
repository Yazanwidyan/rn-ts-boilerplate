import {
  Dimensions,
  Platform,
  StyleSheet,
  I18nManager,
  StatusBar,
} from 'react-native';

import {
  black_10,
  black_50,
  black,
  error,
  transparent,
  white,
  black_20,
} from '@APPNAME/constants';

export const {height, width} = Dimensions.get('screen');

export const statusBarHeight = StatusBar.currentHeight;

export const zero = 0;

export const GlobalStyles = StyleSheet.create({
  absolute: {position: 'absolute'},
  alignItemsCenter: {alignItems: 'center'},
  alignSelfAuto: {alignSelf: 'auto'},
  alignSelfCenter: {alignSelf: 'center'},
  capitalizeText: {textTransform: 'capitalize'},
  centeredView: {
    alignItems: 'center',
    backgroundColor: white,
    flex: 1,
    justifyContent: 'center',
  },
  // Elevations
  elevation0: {
    ...Platform.select({
      ios: {
        shadowColor: 'transparent',
        shadowRadius: 0,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0,
      },
      android: {
        elevation: 0,
      },
    }),
  },
  elevation1: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.08,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  elevation2: {
    marginBottom: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowRadius: 3,
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.15,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  elevation3: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowRadius: 4.5,
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
      },
      android: {
        elevation: 7,
      },
    }),
  },
  elevation4: {
    elevation: 10,
    shadowColor: black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
  },
  fill: {
    flex: 1,
    width: '100%',
  },
  flex0: {flex: 0},
  flex1: {flex: 1},
  flex2: {flex: 2},
  flexGrow0: {flexGrow: 0},
  flexGrow1: {flexGrow: 1},
  flexWrap: {flexWrap: 'wrap'},
  floatingButton: {bottom: 0, position: 'absolute'},
  inputActive: {
    borderColor: black_10,
    borderWidth: 1,
    color: black,
  },
  inputDisabled: {
    backgroundColor: black_10,
    borderColor: black_10,
    borderWidth: 1,
    color: black_50,
  },
  inputError: {
    borderColor: error,
    borderWidth: 1,
    color: error,
  },
  inputInitial: {
    borderColor: black_10,
    borderWidth: 1,
    color: black_50,
  },

  justifyCenter: {
    justifyContent: 'center',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  // colors
  marginBottom16: {marginBottom: 16},
  marginBottom24: {marginBottom: 24},
  marginBottom4: {marginBottom: 4},
  marginBottom8: {marginBottom: 8},
  marginHorizontal16: {marginHorizontal: 16},
  marginLeft8: {marginLeft: 8},
  marginRight32: {marginRight: 32},
  marginRight8: {marginRight: 8},
  marginTop0: {marginTop: 0},
  marginTop16: {marginTop: 16},
  marginTop24: {marginTop: 24},
  marginTop32: {marginTop: 32},
  modalHandle: {backgroundColor: black_20, width: 80},
  // outline
  opacity0: {opacity: 0},
  opacity04: {opacity: 0.4},
  opacity1: {opacity: 1},
  outline: {
    borderColor: black_10,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  paddingBottom0: {paddingBottom: 0},
  paddingBottom16: {paddingBottom: 16},
  paddingBottom32: {paddingBottom: 32},
  paddingBottom4: {paddingBottom: 4},
  paddingHorizontal16: {paddingHorizontal: 16},
  paddingHorizontal24: {paddingHorizontal: 24},
  paddingLeft16: {paddingLeft: 16},
  paddingVertical16: {paddingVertical: 16},
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  rowOnly: {flexDirection: 'row'},
  rtlLeft0: {
    ...(I18nManager.isRTL
      ? {
          right: 0,
        }
      : {left: 0}),
  },
  rtlRight0: {
    ...(I18nManager.isRTL
      ? {
          left: 0,
        }
      : {right: 0}),
  },
  selfCenter: {
    alignSelf: 'center',
  },
  tabIcon: {
    height: 30,
    marginBottom: 4,
    resizeMode: 'contain',
    tintColor: black_50,
    width: 30,
  },
  tabIconNew: {
    height: 28,
    resizeMode: 'contain',
    width: 26,
  },
  tabLabelView: {
    alignItems: 'center',
    flexDirection: 'column',
    height: 35,
    justifyContent: 'space-between',
    paddingBottom: 5,
    paddingTop: 2,
  },
  textAlignCenter: {textAlign: 'center'},
  transparent: {
    backgroundColor: transparent,
    color: transparent,
  },
  width100: {width: '100%'},
  zIndex: {
    zIndex: 9,
  },
  zIndex3: {zIndex: 3},
});
