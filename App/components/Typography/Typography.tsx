import React, {FC, Children, isValidElement, cloneElement} from 'react';
import {Text} from 'react-native';
import {useTranslation} from 'react-i18next';

import {black_80, success, white, white_80} from '@APPNAME/constants';
import {languageDetector} from '@APPNAME/utils';
import {TypographyProps} from '@types';

import styles from './Typography.style';
import {getIsDarkMode} from '@APPNAME/redux/selectors/account.selectors';
import {useSelector} from 'react-redux';

const Typography: FC<TypographyProps> = props => {
  const isDarkMode = useSelector(getIsDarkMode);

  const {t} = useTranslation();
  const {
    value,
    variant,
    fontSize,
    lineHeight,
    letterSpacing,
    color,
    children,
    textAlign = 'left',
    style,
    withTranslation = true,
    capitalize,
  } = props;

  const shownText = languageDetector(value) ?? value;
  const translatedText = withTranslation ? t(shownText) : shownText;

  return (
    <Text
      {...props}
      style={[
        styles[variant || 'headline'],
        {color: isDarkMode ? color || white_80 : color || success},
        fontSize ? {fontSize: fontSize} : {},
        textAlign ? {textAlign: textAlign} : {},
        lineHeight ? {lineHeight: lineHeight} : {},
        letterSpacing ? {letterSpacing: letterSpacing} : {},
        capitalize ? styles.capitalize : {},
        style,
      ]}>
      {translatedText}
      {children}
    </Text>
  );
};

export default Typography;
