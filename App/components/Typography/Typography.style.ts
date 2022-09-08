import // fontChangaRegular,
// fontChangaMedium,
// fontChangaSemiBold,
// fontChangaBold,
'@APPNAME/constants';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  buttonTitle: {
    // fontFamily: fontChangaBold,
    fontSize: 12,
  },
  callToAction: {
    // fontFamily: fontChangaMedium,
    fontSize: 16,
    textTransform: 'uppercase',
  },
  callout: {
    // fontFamily: fontChangaBold,
    fontSize: 12,
  },
  capitalize: {
    textTransform: 'capitalize',
  },
  caveatBold: {
    // fontFamily: fontChangaBold,
    fontSize: 14,
  },
  footnote: {
    // fontFamily: fontChangaRegular,
    fontSize: 14,
  },
  headline: {
    // fontFamily: fontChangaBold,
    fontSize: 14,
  },
  italicTitle: {
    // fontFamily: fontChangaBold,
    fontSize: 32,
  },
  largeTitle: {
    // fontFamily: fontChangaMedium,
    fontSize: 36,
    paddingHorizontal: 1, // prevent text horizontal area from being cut
    textTransform: 'uppercase',
  },
  largeTitleSuperItalic: {
    // fontFamily: fontChangaBold,
    fontSize: 48,
    textTransform: 'uppercase',
  },
  semiBold: {
    // fontFamily: fontChangaSemiBold,
    fontSize: 12,
  },
  smallNote: {
    // fontFamily: fontChangaRegular,
    fontSize: 12,
  },
  subHeadline: {
    // fontFamily: fontChangaRegular,
    fontSize: 15,
  },
  tag: {
    // fontFamily: fontChangaBold,
    fontSize: 14,
  },
  wide: {
    // fontFamily: fontChangaBold,
    fontSize: 18,
    textTransform: 'uppercase',
  },
  wideTitle: {
    // fontFamily: fontChangaBold,
    fontSize: 40,
    textTransform: 'uppercase',
  },
  wideTitleSuperItalic: {
    // fontFamily: fontChangaBold,
    fontSize: 48,
    textTransform: 'uppercase',
  },
});

export default styles;
