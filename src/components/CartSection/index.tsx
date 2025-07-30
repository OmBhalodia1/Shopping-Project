import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import { icons } from '../../utils/icons';
import { styles } from './styles';

export type CartSectionProps = {
  id: string;
  image: ImageSourcePropType;
  subtext?: string;
  price?: number;
  discountedPrice?: number;
  quantity: number;
  onQuantityChange: (id: string, newQuantity: number) => void;
};

const CartSection: React.FC<CartSectionProps> = ({
  id,
  image,
  subtext = 'Lorem ipsum dolor sit amet consectetur.',
  price = 17,
  discountedPrice,
  quantity,
  onQuantityChange,
}) => {
  const increment = () => onQuantityChange(id, quantity + 1);
  const decrement = () => onQuantityChange(id, quantity - 1);

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.imageWrapper}>
          <Image source={image} style={styles.productImage} />
        </View>
        <TouchableOpacity
          style={styles.deleteButton}
          activeOpacity={0.7}
          onPress={() => onQuantityChange(id, 0)}
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
            <Text style={styles.price}>${price},00</Text>
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
