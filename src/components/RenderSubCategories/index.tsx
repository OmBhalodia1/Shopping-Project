import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from './styles';

type Props = {
  subcategories: string[];
  onPressSubcategory?: (subcategory: string) => void;
};

const RenderSubcategories: React.FC<Props> = ({
  subcategories,
  onPressSubcategory,
}) => {
  return (
    <View style={styles.subGrid}>
      {subcategories.map((sub, idx) => (
        <TouchableOpacity
          key={idx}
          style={styles.subItem}
          onPress={() => onPressSubcategory?.(sub)}
        >
          <Text style={styles.subText}>{sub}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RenderSubcategories;
