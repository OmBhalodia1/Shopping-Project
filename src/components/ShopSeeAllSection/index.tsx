import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { icons } from '../../utils/icons';

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
        <Image source={icons.ArrowButton} resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default ShopSeeAllSection;
