import {I18nManager, Platform} from 'react-native';

export const isArabic = I18nManager.isRTL;
export const isAndroid = Platform.OS === 'android';
export const selectedLang: 'en' | 'ar' = isArabic ? 'ar' : 'en';

export const capitalize = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const languageDetector = (value, language?: 'ar' | 'en') => {
  if (value?.[language || selectedLang]) {
    return value?.[language || selectedLang];
  } else {
    return value;
  }
};

export const isObjectEmpty = value => {
  if (value) {
    return (
      Object.prototype.toString.call(value) === '[object Object]' &&
      JSON.stringify(value) === '{}'
    );
  }

  return true;
};
