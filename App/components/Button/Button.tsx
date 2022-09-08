import React, {FC} from 'react';
import {Pressable} from 'react-native';

import {black} from '@APPNAME/constants';
import {width} from '@APPNAME/utils';
import {ButtonProps} from '@types';

import Typography from '../Typography/Typography';

import styles from './Button.style';

const sizeList = {
  small: {width: width * 0.5},
  medium: {width: width * 0.75},
  large: {width: '100%'},
};

const Button: FC<ButtonProps> = ({
  children,
  customButtonStyle,
  customTitleStyle,
  disabled = false,
  isLoading = false,
  onPress,
  showIfDisabled = true,
  size = 'large',
  title,
}) => {
  const buttonOpacity = disabled && showIfDisabled ? 0.4 : 1;

  return (
    <Pressable
      onPress={() => onPress?.()}
      disabled={disabled || isLoading}
      style={[
        styles.mainContainer,
        sizeList[size],
        {
          opacity: buttonOpacity,
        },
        customButtonStyle,
      ]}>
      <>
        {children ? (
          children
        ) : (
          <Typography
            variant="smallNote"
            color={black}
            style={[styles.title, customTitleStyle]}
            value={title || ''}
            fontSize={width > 374 ? 16 : 13}
            lineHeight={18}
          />
        )}
      </>
    </Pressable>
  );
};

export default Button;
