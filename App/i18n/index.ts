import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {I18nManager} from 'react-native';

import ar from './ar.json';
import en from './en.json';

const resources = {
  ar: ar,
  en: en,
};

i18n.use(initReactI18next).init({
  resources,
  initImmediate: false,
  preload: ['en', 'ar'],
  lng: I18nManager.isRTL ? 'ar' : 'en',
  fallbackLng: 'en',
});

export default i18n;
