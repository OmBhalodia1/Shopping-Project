import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Title from '../Title';
import Button from '../Button';
import { styles } from './styles';
type Mode = 'contained' | 'outline' | 'plain';

type CartFooterProps = {
  total?: string;
  mode?: Mode;
};

const CartFooter: React.FC<CartFooterProps> = ({
  total = 37,
  mode = 'contained',
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.totalContainer}>
        <Title label="Total" />
        <Text style={styles.amount}>${total}</Text>
      </View>
      <Button
        title="Checkout"
        mode={mode}
        style={{
          paddingHorizontal: 30,
          height: 38,
          borderRadius: 10,
          marginLeft: 50,
        }}
      />
    </View>
  );
};

export default CartFooter;
