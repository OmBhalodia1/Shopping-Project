import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from './styles';
type QuantitySelectorProps = {
  title?: string;
  isTitle?: boolean;
};
const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  title = 'Quantity',
  isTitle = true,
}) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(q => q + 1);
  const decrement = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  return (
    <View style={styles.container}>
      {isTitle && <Text style={styles.label}>{title}</Text>}
      <View style={styles.controls}>
        <TouchableOpacity style={styles.button} onPress={decrement}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <View style={styles.quantityBox}>
          <Text style={styles.quantityText}>{quantity}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={increment}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QuantitySelector;
