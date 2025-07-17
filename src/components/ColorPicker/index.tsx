import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Text,
} from 'react-native';
import { styles } from './styles';

const COLORS = [
  { name: 'Gray', value: '#EBEBEB' },
  { name: 'Black', value: '#2A2A2A' },
  { name: 'Blue', value: '#0C29B9' },
  { name: 'Red', value: '#FF3333' },
  { name: 'Teal', value: '#0CA8B9' },
  { name: 'Gold', value: '#E4A719' },
  { name: 'Purple', value: '#9D3CB9' },
];

type Color = {
  name: string;
  value: string;
};

type ColorPickerProps = {
  colors?: Color[];
  onChange?: (color: Color) => void;
};

export default function ColorPicker({
  colors = COLORS,
  onChange,
}: ColorPickerProps) {
  const [selected, setSelected] = useState(0);

  const handleSelect = (idx: number) => {
    setSelected(idx);
    onChange?.(colors[idx]);
  };

  return (
    <FlatList
      data={colors}
      keyExtractor={item => item.name}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.colorList}
      renderItem={({ item, index }) => (
        <TouchableOpacity onPress={() => handleSelect(index)}>
          <View
            style={[
              styles.colorButton,
              selected === index && styles.colorSelected,
            ]}
          >
            <View
              style={[styles.colorCircle, { backgroundColor: item.value }]}
            />
            {selected === index && (
              <View style={styles.tickContainer}>
                <View style={styles.tickCircle}>
                  <Text style={styles.tickText}>✓</Text>
                </View>
              </View>
            )}
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
