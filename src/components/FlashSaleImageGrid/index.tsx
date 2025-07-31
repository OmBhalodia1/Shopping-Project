import React from 'react';
import { View, Image, Text, Dimensions, TouchableOpacity } from 'react-native';
import { images } from '../../utils/images';
import { styles } from './styles';

const DATA = [
  { id: '1', image: images.FlashSale1 },
  { id: '2', image: images.FlashSale2 },
  { id: '3', image: images.FlashSale3 },
  { id: '4', image: images.FlashSale4 },
  { id: '5', image: images.FlashSale5 },
  { id: '6', image: images.FlashSale6 },
];

const numColumns = 3;
const cardSize = (Dimensions.get('window').width - 60) / numColumns;

const ImageCard = ({ item }: { item: any }) => (
  <TouchableOpacity
    style={[styles.card, { width: cardSize, height: cardSize }]}
  >
    <Image source={item.image} style={styles.image} resizeMode="cover" />
    <View style={styles.discountBadge}>
      <Text style={styles.discountText}>-20%</Text>
    </View>
  </TouchableOpacity>
);

export default function FlashSaleImageGrid() {
  return (
    <View style={styles.container}>
      {DATA.map(item => (
        <ImageCard key={item.id} item={item} />
      ))}
    </View>
  );
}
