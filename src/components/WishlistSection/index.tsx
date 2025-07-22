import React from 'react';
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

export type WishlistSectionProps = {
  image: ImageSourcePropType;
  subtext?: string;
  price?: number;
  discountedPrice?: number;
  optionColor?: string;
  optionSize?: string;
  onDelete?: () => void;
  onAdd?: () => void;
};

const WishlistSection: React.FC<WishlistSectionProps> = ({
  image,
  subtext = 'Lorem ipsum dolor sit amet consectetur.',
  price = 17,
  discountedPrice,
  optionColor = 'Pink',
  optionSize = 'M',
  onDelete,
  onAdd,
}) => {
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
              <Text style={styles.discountedPrice}>${price},00</Text>
              <Text style={styles.price}>${discountedPrice},00</Text>
            </>
          ) : (
            <Text style={styles.price}>${price}</Text>
          )}
        </View>

        <View style={styles.optionsRow}>
          <View style={styles.optionBox}>
            <Text style={styles.optionText}>{optionColor}</Text>
          </View>
          <View style={styles.optionBox}>
            <Text style={styles.optionText}>{optionSize}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.addButton}
        onPress={onAdd}
        activeOpacity={0.7}
      >
        <Image source={icons.wishlistAdd} style={styles.addIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default WishlistSection;
