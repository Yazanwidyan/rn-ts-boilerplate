import React, {FC, Children, isValidElement, cloneElement} from 'react';
import {Text} from 'react-native';
import {useTranslation} from 'react-i18next';

import {white} from '@APPNAME/constants';
import {languageDetector} from '@APPNAME/utils';
import {TypographyProps} from '@types';

import styles from './Typography.style';

const Typography: FC<TypographyProps> = props => {
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
        {color: color || white},
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
