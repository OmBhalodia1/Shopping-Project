import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { images } from '../../utils/images';
import { styles } from './styles';

export type Product = {
  id: string;
  image: any;
  name: string;
  price: string;
};

type NewItemsListProps = {
  products: Product[];
};

const ProductCard: React.FC<{ image: any; name: string; price: string }> = ({
  image,
  name,
  price,
}) => (
  <TouchableOpacity style={styles.card}>
    <Image source={image} style={styles.image} resizeMode="cover" />
    <Text style={styles.name} numberOfLines={2}>
      {name}
    </Text>
    <Text style={styles.price}>{price}</Text>
  </TouchableOpacity>
);

const NewItemsList: React.FC<NewItemsListProps> = ({ products }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {products.map(item => (
        <ProductCard
          key={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
        />
      ))}
    </ScrollView>
  );
};

export default NewItemsList;
