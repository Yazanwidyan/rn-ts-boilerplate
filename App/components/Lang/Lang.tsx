import React from 'react';
import {View, TouchableOpacity, I18nManager} from 'react-native';
import RNRestart from 'react-native-restart';

import Typography from '../Typography/Typography';

import i18n from '@APPNAME/i18n';

import styles from './Lang.style';

const Lang = () => {
  const changeLang = lang => {
    if (i18n.language !== lang) {
      const newLang = lang === 'ar' ? 'en' : 'ar';

      setTimeout(
        () =>
          i18n.changeLanguage(newLang).then(() => {
            I18nManager.forceRTL(lang === 'ar');
            RNRestart.Restart();
          }),
        600,
      );
    }
  };

  return (
    <View style={styles.languageView}>
      <TouchableOpacity
        onPress={() => changeLang('en')}
        style={styles.touchableStyle}>
        <Typography
          style={i18n.language === 'ar' ? styles.arabicText : {}}
          variant="headline"
          value={'english_text'}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => changeLang('ar')}
        style={styles.touchableStyle}>
        <Typography
          variant="headline"
          style={i18n.language === 'en' ? styles.arabicTextAr : {}}
          value={'arabic_text'}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Lang;
