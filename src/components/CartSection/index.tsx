import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import { icons } from '../../utils/icons';
import { styles } from './styles';
export type WishlistItemProps = {
  image: ImageSourcePropType;
  subtext?: string;
  price?: number;
  discountedPrice?: number;
  optionColor?: string;
  optionSize?: string;
  onDelete?: () => void;
  onAdd?: () => void;
};

const CartSection: React.FC<WishlistItemProps> = ({
  image,
  subtext = 'Lorem ipsum dolor sit amet consectetur.',
  price = 17,
  discountedPrice,
  onDelete,
}) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(q => q + 1);
  const decrement = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.imageWrapper}>
          <Image source={image} style={styles.productImage} />
        </View>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={onDelete}
          activeOpacity={0.7}
        >
          <Image source={icons.delete} style={styles.deleteIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.middle}>
        <Text style={styles.subtext}>{subtext}</Text>
        <View style={styles.priceRow}>
          {discountedPrice !== undefined ? (
            <>
              <Text style={styles.discountedPrice}>${price}</Text>
              <Text style={styles.price}>${discountedPrice}</Text>
            </>
          ) : (
            <Text style={styles.price}>${price}</Text>
          )}
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
      </View>
    </View>
  );
};

export default CartSection;
