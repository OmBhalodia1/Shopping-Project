import React from 'react';
import { View, Text, Image, StyleSheet, Platform } from 'react-native';
import { styles } from './styles';
type CartItemsListProps = {
  price: string;
  imageSource: any;
};

const CartItemsList: React.FC<CartItemsListProps> = ({
  price,
  imageSource,
}) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.imageWrapper}>
          <Image source={imageSource} style={styles.profileImage} />
          <View style={styles.badgeWrapper}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>1</Text>
            </View>
          </View>
        </View>

        <Text style={styles.text}>
          Lorem ipsum dolor sit amet{'\n'}consectetur.
        </Text>
      </View>
      <Text style={styles.textPrice}>{price}</Text>
    </View>
  );
};

export default CartItemsList;
