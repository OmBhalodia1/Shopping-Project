import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import { styles } from './styles';

type ArrowButtonProps = {
  title: string;
} & TouchableOpacityProps;

const ArrowButton: React.FC<ArrowButtonProps> = ({ title, ...rest }) => {
  return (
    <TouchableOpacity style={styles.loginRow} {...rest}>
      <Text style={styles.loginText}>{title}</Text>
      <View style={styles.arrowCircle}>
        <Text style={styles.arrow}>{'→'}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ArrowButton;
