import React from 'react';
import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  TextProps,
} from 'react-native';
import { styles } from './styles';
type Mode = 'contained' | 'outline' | 'plain';

type ButtonProps = {
  title: string;
  mode?: Mode;
} & TouchableOpacityProps &
  TextProps;

const Button: React.FC<ButtonProps> = ({
  title,
  mode = 'contained',
  style,
  ...rest
}) => {
  const isOutline = mode === 'outline';
  const isPlain = mode === 'plain';

  return (
    <TouchableOpacity
      style={[
        styles.mainButton,
        isOutline ? styles.outline : styles.contained,
        isPlain ? styles.plain : null,
        style,
      ]}
      activeOpacity={0.8}
      {...rest}
    >
      {title && (
        <Text
          style={[
            styles.buttonText,
            isOutline ? styles.textOutline : styles.textContained,
            isPlain ? styles.textPlain : null,
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
