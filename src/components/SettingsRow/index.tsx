import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { styles } from './styles';

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
      <Text style={styles.arrow}>{'>'}</Text>
    </TouchableOpacity>
  );
};

export default SettingsRow;
