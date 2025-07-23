import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from './styles';

type DeliveryType = 'Standard' | 'Express';
type DeliveryOptionsProps = {
  deliveryType: DeliveryType;
  days: string;
  price: string;
};

const DeliveryOptions: React.FC<DeliveryOptionsProps> = ({
  deliveryType,
  days,
  price,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.optionContainer}>
        <Text style={styles.optionLabel}>{deliveryType}</Text>
        <Text style={styles.optionDetail}>{days} days</Text>
        <Text style={styles.optionPrice}>{price}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DeliveryOptions;
