import React, {useRef, forwardRef, useImperativeHandle, useState} from 'react';
import {Animated} from 'react-native';

import {white} from '@APPNAME/constants';
import {interpolate} from '@APPNAME/utils';
import {ToastProps} from '@types';

import Typography from '../Typography/Typography';

import styles from './Toast.style';

const Toast = forwardRef<ToastProps, ToastProps>(
  (
    {
      animationDuration = 200,
      controlRef,
      extraStyle,
      slideAmount = 40,
      toastShowDuration = 5000,
    }: ToastProps,
    ref,
  ) => {
    const [message, setMessage] = useState('');
    const animatedValue = useRef(new Animated.Value(0)).current;

    useImperativeHandle(controlRef, () => ({
      show: text => {
        if (typeof text === 'string') {
          setMessage(text);
        } else {
          setMessage('Something went wrong');
        }
        _show();
      },
      ref,
    }));

    const _show = () => {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: animationDuration,
        useNativeDriver: true,
      }).start(_close);
    };

    const _close = () => {
      Animated.timing(animatedValue, {
        delay: toastShowDuration,
        toValue: 0,
        duration: animationDuration,
        useNativeDriver: true,
      }).start();
    };

    return (
      <Animated.View
        style={[
          styles.ToastContainer,
          {
            opacity: interpolate(animatedValue, [0, 1]),
            zIndex: interpolate(animatedValue, [-1, 99]),
            elevation: interpolate(animatedValue, [-1, 99]),
            transform: [
              {translateY: interpolate(animatedValue, [0, -slideAmount])},
            ],
          },
          extraStyle,
        ]}>
        <Typography
          value={message ?? ''}
          variant="semiBold"
          color={white}
          fontSize={12}
          lineHeight={16}
          style={styles.txt}
        />
      </Animated.View>
    );
  },
);

export default Toast;
