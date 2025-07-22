import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { icons } from '../../utils/icons';
import { styles } from './styles';

interface InfoSectionProps {
  info: string;
  address: string;
  onEdit?: () => void;
}

const InfoSection: React.FC<InfoSectionProps> = ({ address, onEdit, info }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{info}</Text>
      <View style={styles.row}>
        <View style={styles.addressContainer}>
          <Text style={styles.addressText}>{address}</Text>
        </View>
        <TouchableOpacity onPress={onEdit}>
          <Image source={icons.edit} style={styles.icon} resizeMode="contain" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InfoSection;
