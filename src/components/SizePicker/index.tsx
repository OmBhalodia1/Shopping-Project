import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { styles } from './styles';

const SIZES = ['XS', 'S', 'M', 'L', 'XL', '2XL'];

export default function SizePicker() {
  const [selected, setSelected] = useState(2);

  return (
    <View style={styles.wrapper}>
      {SIZES.map((size, index) => (
        <Pressable
          key={size}
          style={[styles.segment, selected === index && styles.selectedSegment]}
          onPress={() => setSelected(index)}
        >
          {selected === index && <View style={styles.circleHighlight} />}
          <Text
            style={[styles.label, selected === index && styles.selectedLabel]}
          >
            {size}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

const CIRCLE_SIZE = 48;
const WRAPPER_HEIGHT = 37;
