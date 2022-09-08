import {ColorValue, StyleProp, TextProps, TextStyle} from 'react-native';

export type VariantType =
  | 'buttonTitle'
  | 'callToAction'
  | 'callout'
  | 'caveatBold'
  | 'footnote'
  | 'headline'
  | 'italicTitle'
  | 'largeTitle'
  | 'largeTitleSuperItalic'
  | 'semiBold'
  | 'smallNote'
  | 'subHeadline'
  | 'tag'
  | 'wide'
  | 'wideTitle'
  | 'wideTitleSuperItalic';

export type TextAlignType = 'center' | 'left' | 'right';

export interface TypographyProps extends TextProps {
  color?: ColorValue;
  fontSize?: number;
  letterSpacing?: number;
  lineHeight?: number;
  styles?: StyleProp<TextStyle>;
  textAlign?: TextAlignType;
  value: string | LangProps | number;
  variant?: VariantType;
  withTest?: boolean;
  capitalize?: boolean;
  withTranslation?: boolean;
}

export interface LangProps {
  ar: string;
  en: string;
}
