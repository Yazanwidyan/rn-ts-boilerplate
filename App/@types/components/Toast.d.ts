import {ViewStyle} from 'react-native';

export type ToastProps = {
  animationDuration?: number;
  extraStyle?: ViewStyle;
  controlRef: any;
  slideAmount?: number;
  toastShowDuration?: number;
};

export type ToastTypes = {
  show: Function;
};

export interface CardDetailsProps {
  cardToken?: string;
  card?: {
    cardBrand?: string;
    cardMaskedNumber?: string;
    expiryYear?: string;
    status?: string;
    defaultCard?: string;
    expiryMonth?: string;
  };
}
