import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { images } from '../../utils/images';
import { styles } from './styles';
const { width, height } = Dimensions.get('window');

type AvatarProps = {
  style?: StyleProp<ViewStyle>;
};

const Avatar: React.FC<AvatarProps> = ({ style }) => {
  return (
    <View
      style={[
        styles.avatarContainer,
        { top: height * 0.18, left: width / 2 - 60, position: 'absolute' },
        style,
      ]}
    >
      <View style={styles.avatarBorder}>
        <Image source={images.Avatar} style={styles.avatar} />
      </View>
    </View>
  );
};

export default Avatar;
