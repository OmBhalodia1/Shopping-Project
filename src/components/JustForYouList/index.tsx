import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { styles } from './styles';

type Product = {
  id: string;
  image: any;
  name: string;
  price: string;
};

type NewItemsListProps = {
  products: Product[];
  onProductPress?: (product: Product) => void;
};

const ProductCard: React.FC<{
  product: Product;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}> = ({ product, onPress, style }) => (
  <TouchableOpacity style={[styles.card, style]} onPress={onPress}>
    <View style={styles.shadow}>
      <Image source={product.image} style={styles.image} resizeMode="cover" />
    </View>
    <Text style={styles.name} numberOfLines={2}>
      {product.name}
    </Text>
    <Text style={styles.price}>{product.price}</Text>
  </TouchableOpacity>
);

const JustForYouList: React.FC<NewItemsListProps> = ({
  products,
  onProductPress,
}) => {
  return (
    <View style={styles.container}>
      {products.map((item, index) => (
        <ProductCard
          key={item.id}
          product={item}
          onPress={() => onProductPress?.(item)}
          style={index % 2 === 0 ? {} : { paddingRight: 0 }}
        />
      ))}
    </View>
  );
};

export default JustForYouList;
