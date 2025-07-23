import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import React from 'react';
import Title from '../Title';
import Button from '../Button';
import { styles } from './styles';

type Mode = 'contained' | 'outline' | 'plain';

type CartFooterProps = {
  total?: number;
  mode?: Mode;
  isCartEmpty?: boolean;
  onPress?: () => void;
  title?: string;
  style?: StyleProp<ViewStyle>;
};

const CartFooter: React.FC<CartFooterProps> = ({
  total = 0,
  mode = 'contained',
  isCartEmpty = false,
  onPress,
  title = 'Checkout',
  style,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.totalContainer}>
        <Title label="Total" />
        <Text style={styles.amount}>${total || 0}</Text>
      </View>
      <Button
        title={title}
        style={[
          {
            paddingHorizontal: 30,
            height: 38,
            borderRadius: 10,
            marginLeft: 50,
          },
          style,
        ]}
        disabled={isCartEmpty}
        mode={isCartEmpty ? 'plain' : undefined}
        onPress={onPress}
      />
    </View>
  );
};

export default CartFooter;
