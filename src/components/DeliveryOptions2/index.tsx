import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

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
              {checked && (
                <View style={styles.tickContainer}>
                  <View style={styles.tickCircle}>
                    <Text style={styles.tickText}>✓</Text>
                  </View>
                </View>
              )}
            </View>
            <Text style={styles.optionLabel}>{o.type}</Text>
            <View style={styles.daysBadgeWrap}>
              <Text style={styles.daysBadge}>{o.days} days</Text>
            </View>
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
