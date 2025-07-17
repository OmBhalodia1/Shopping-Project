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

export interface Product {
  id: string;
  image: any;
  name: string;
  price: string;
}

type NewItemsListProps = {
  products: Product[];
};

const ProductCard: React.FC<{ image: any; name: string; price: string }> = ({
  image,
  name,
  price,
}) => (
  <TouchableOpacity style={styles.card}>
    <View style={styles.shadow}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <Text style={styles.name} numberOfLines={2}>
        {name}
      </Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  </TouchableOpacity>
);

const JustForYouList: React.FC<NewItemsListProps> = ({ products }) => {
  return (
    <View style={styles.container}>
      {products.map(item => (
        <ProductCard
          key={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
        />
      ))}
    </View>
  );
};

export default JustForYouList;
