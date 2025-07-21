import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { styles } from '../Title/styles';

type TitleLabelProps = {
  label: string;
};
const TitleLabel: React.FC<TitleLabelProps> = ({ label }) => {
  return (
    <View>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
};

export default TitleLabel;
