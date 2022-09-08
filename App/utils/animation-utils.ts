import { Animated } from 'react-native';

/**
 * Pre defined interpolate function DON'T CHANGE THE ORDER.
 *
 * @param ref: Reference type for animated value.
 * @param outputRange: The range for the animated output value.
 * @param inputRange: The range for the animated input value.
 * @param extrapolate: Extrapolate value.
 * @param extrapolateLeft: ExtrapolateLeft value.
 * @param extrapolateRight: ExtrapolateRight value.
 * @returns Value for the animation.
 */
export const interpolate = (
  ref: Animated.Value,
  outputRange: Array<string> | Array<number> = [0, 1],
  inputRange: Array<number> = [0, 1],
  extrapolate: 'clamp' | 'extend' | 'identity' = 'clamp',
  extrapolateLeft: 'clamp' | 'extend' | 'identity' = 'clamp',
  extrapolateRight: 'clamp' | 'extend' | 'identity' = 'clamp'
) => {
  return ref.interpolate({
    outputRange,
    inputRange,
    extrapolate,
    extrapolateLeft,
    extrapolateRight,
  });
};
