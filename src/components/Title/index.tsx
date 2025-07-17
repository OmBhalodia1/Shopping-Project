import { Text, View, TextStyle, StyleProp, Image } from 'react-native';
import React from 'react';
import ShopSeeAllSection from '../ShopSeeAllSection';
import { styles } from './styles';
import Timer from '../Timer';
import { icons } from '../../utils/icons';

type TitleProps = {
  label: string;
  button?: boolean;
  timer?: boolean;
  star?: boolean;
  filter?: boolean;

  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
};

const Title: React.FC<TitleProps> = ({
  label,
  button = false,

  textStyle,
  timer = false,
  star = false,
  filter = false,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.star}>
        <Text style={[styles.text, textStyle]}>{label}</Text>
        {star && (
          <Image style={{ marginTop: 5, marginLeft: 7 }} source={icons.star} />
        )}
      </View>
      {button && <ShopSeeAllSection onPress={onPress} />}
      {timer && <Timer />}
      {filter && <Image source={icons.filter} resizeMode="contain" />}
    </View>
  );
};

export default Title;
