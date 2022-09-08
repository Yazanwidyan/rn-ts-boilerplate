import { Animated } from 'react-native';

export interface interpolateProps {
  extrapolate?: 'clamp' | 'extend' | 'identity';
  extrapolateLeft?: 'clamp' | 'extend' | 'identity';
  extrapolateRight?: 'clamp' | 'extend' | 'identity';
  inputRange?: Array<number>;
  outputRange?: Array<number>;
  ref?: Animated.Value;
}
