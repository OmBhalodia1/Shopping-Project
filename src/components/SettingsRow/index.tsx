import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';
import { styles } from './styles';
import { icons } from '../../utils/icons';

type SettingsRowProps = {
  label: string;
  value?: string;
  onPress?: () => void;
};

const SettingsRow: React.FC<SettingsRowProps> = ({ label, value, onPress }) => {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
      {value && <Text style={styles.value}>{value}</Text>}
      <Image source={icons.arrowRight} resizeMode="contain" />
    </TouchableOpacity>
  );
};

export default SettingsRow;
