import {ColorValue, StyleProp, TextStyle, ViewStyle} from 'react-native';

export type ButtonProps = {
  customTitleStyle?: StyleProp<TextStyle>;
  customButtonStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  isLoading?: boolean;
  showIfDisabled?: boolean;
  onPress: () => void;
  size?: 'small' | 'medium' | 'large';
  title?: string;
  children?: string;
};
