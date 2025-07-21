import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { images } from '../../utils/images';
import { styles } from './styles';

const products = [
  { id: '1', image: images.MostPopular1, label: 'New' },
  { id: '2', image: images.MostPopular2, label: 'Sale' },
  { id: '3', image: images.MostPopular3, label: 'Hot' },
  { id: '4', image: images.MostPopular4, label: 'Hot' },
];

export default function MostPopularItemList() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {products.map(item => (
          <TouchableOpacity key={item.id} style={styles.shadowWrapper}>
            <View style={styles.card}>
              <Image source={item.image} resizeMode="cover" />
              <View style={styles.infoRow}>
                <Text style={styles.points}>
                  1780 <Text style={styles.heart}>♥</Text>
                </Text>
                <Text style={styles.label}>{item.label}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
