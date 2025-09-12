import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
  Image,
} from 'react-native';
import React from 'react';
import { styles } from './styles';
import { icons } from '../../utils/icons';

type ArrowButtonProps = {
  title?: string;
} & TouchableOpacityProps;

const ArrowButton: React.FC<ArrowButtonProps> = ({ title, ...rest }) => {
  return (
    <TouchableOpacity style={styles.loginRow} {...rest}>
      <Text style={styles.loginText}>{title}</Text>
      <Image source={icons.ArrowButton} resizeMode="contain" />
    </TouchableOpacity>
  );
};

export default ArrowButton;
