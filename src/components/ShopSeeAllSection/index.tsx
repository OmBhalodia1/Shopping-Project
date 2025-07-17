import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';

type ShopSeeAllSectionProps = {
  title?: string;
  onPress?: () => void;
};

const ShopSeeAllSection: React.FC<ShopSeeAllSectionProps> = ({
  title,
  onPress,
}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
      <TouchableOpacity style={styles.seeAllBtn} onPress={onPress}>
        <Text style={styles.seeAllText}>See All</Text>
        <View style={styles.arrowCircle}>
          <Text style={styles.arrow}>{'→'}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ShopSeeAllSection;
