import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { icons } from '../../utils/icons';
import { styles } from './styles';

type OrderHistoryItemProps = {
  date: string;
  orderId: string;
  amount: string;
  isNegative?: boolean;
};

const OrderHistoryItem: React.FC<OrderHistoryItemProps> = ({
  date,
  orderId,
  amount,
  isNegative = false,
}) => (
  <View style={styles.itemContainer}>
    <Image
      source={
        isNegative && icons.orderHistoryRed
          ? icons.orderHistoryRed
          : icons.orderHistory
      }
      style={[
        styles.icon,
        isNegative && !icons.orderHistoryRed ? { tintColor: '#D97474' } : null,
      ]}
    />
    <View style={styles.textContainer}>
      <Text style={styles.date}>{date}</Text>

      <Text style={styles.bold}>Order#{orderId}</Text>
    </View>
    <Text style={[styles.amount, isNegative && styles.negative]}>{amount}</Text>
  </View>
);

export default OrderHistoryItem;
