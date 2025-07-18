import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
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
}> = ({ product, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <View style={styles.shadow}>
      <Image source={product.image} style={styles.image} resizeMode="cover" />
      <Text style={styles.name} numberOfLines={2}>
        {product.name}
      </Text>
      <Text style={styles.price}>{product.price}</Text>
    </View>
  </TouchableOpacity>
);

const JustForYouList: React.FC<NewItemsListProps> = ({
  products,
  onProductPress,
}) => {
  return (
    <View style={styles.container}>
      {products.map(item => (
        <ProductCard
          key={item.id}
          product={item}
          onPress={() => onProductPress?.(item)}
        />
      ))}
    </View>
  );
};

export default JustForYouList;
