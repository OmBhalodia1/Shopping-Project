import React from 'react';
import { Text as ReactText, TextProps } from 'react-native';
import { styles } from './styles';

type Mode = 'title' | 'subtext';

type CustomTextProps = {
  label: string;
  mode: Mode;
} & TextProps;

const Text: React.FC<CustomTextProps> = ({ label, mode, style, ...rest }) => {
  const textStyle = mode === 'title' ? styles.title : styles.subtext;

  return (
    <ReactText style={[textStyle, style]} {...rest}>
      {label}
    </ReactText>
  );
};

export default Text;
