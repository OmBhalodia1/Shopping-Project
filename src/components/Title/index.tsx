import React, { ReactNode, useState } from 'react';
import { Text, View, TextStyle, StyleProp, Image } from 'react-native';
import { icons } from '../../utils/icons';
import { styles } from './styles';

type TitleProps = {
  label: string;
  star?: boolean;
  textStyle?: StyleProp<TextStyle>;
  rightElement?: ReactNode;
};
const Title: React.FC<TitleProps> = ({
  label,

  textStyle,

  star = false,

  rightElement,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.star}>
        <Text style={[styles.text, textStyle]}>{label}</Text>
        {star && <Image style={{ marginLeft: 7 }} source={icons.star} />}
      </View>
      {rightElement}
    </View>
  );
};

export default Title;
