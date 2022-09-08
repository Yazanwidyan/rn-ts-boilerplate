import React, {FC, useEffect, useRef} from 'react';
import {Animated, Easing, View} from 'react-native';
import Svg, {Circle} from 'react-native-svg';

import {white} from '@APPNAME/constants';
import {interpolate} from '@APPNAME/utils';
import {MicroloaderProps} from '@types';

import styles from './Microloader.style';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const Microloader: FC<MicroloaderProps> = ({
  isLoading = true,
  color = white,
  size = 'large',
}) => {
  const scale = size === 'small' ? 0.5 : 1;

  const initialValue = 0.1;
  const offsetRef = useRef(new Animated.Value(initialValue)).current;
  const rotateRef = useRef(new Animated.Value(initialValue)).current;

  useEffect(() => {
    startAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startAnimation = () => {
    Animated.loop(
      Animated.parallel([
        Animated.timing(offsetRef, {
          delay: 20,
          toValue: 1,
          useNativeDriver: true,
          duration: 2000,
          easing: Easing.bezier(1, 0.8, 0.8, 0.8),
        }),
        Animated.timing(rotateRef, {
          toValue: 1,
          useNativeDriver: true,
          duration: 2000,
          easing: Easing.bezier(1, 0.97, 0.93, 1),
        }),
      ]),
    ).start(() => {
      offsetRef.setValue(0.1);
      rotateRef.setValue(0);
    });
  };

  if (!isLoading) return null;

  return (
    <View style={[styles.container, {transform: [{scale}]}]}>
      <Animated.View
        style={{
          transform: [{rotate: interpolate(rotateRef, ['70deg', '855deg'])}],
        }}>
        <Svg height="60" width="60">
          <AnimatedCircle
            cx="30"
            cy="30"
            r="22"
            fill="none"
            strokeWidth={8}
            stroke={color}
            strokeDasharray="150"
            strokeLinecap="round"
            strokeDashoffset={interpolate(
              offsetRef,
              [-151, -220, -151],
              [0.1, 0.6, 1],
            )}
            transform="rotate(125, 30,30)"
          />
        </Svg>
      </Animated.View>
    </View>
  );
};

export default Microloader;
