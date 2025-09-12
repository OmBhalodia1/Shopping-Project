import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import { icons } from '../../utils/icons';

const OPTIONS = [
  { type: 'Standard', days: '5-7', price: 'FREE', isFree: true },
  { type: 'Express', days: '1-2', price: '$12,00', isFree: false },
];

const DeliveryOptions2: React.FC = () => {
  const [selected, setSelected] = useState('Standard');

  return (
    <View>
      {OPTIONS.map(o => {
        const checked = o.type === selected;
        return (
          <TouchableOpacity
            key={o.type}
            style={[styles.optionRow, checked && styles.optionRowChecked]}
            onPress={() => setSelected(o.type)}
            activeOpacity={0.85}
          >
            <View style={styles.radio}>
              {checked && <Image source={icons.check} resizeMode="contain" />}
            </View>
            <Text style={styles.optionLabel}>{o.type}</Text>
            <Text style={styles.daysBadge}>{o.days} days</Text>
            <Text
              style={[styles.optionPrice, o.isFree && styles.optionPriceFree]}
            >
              {o.price}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default DeliveryOptions2;
