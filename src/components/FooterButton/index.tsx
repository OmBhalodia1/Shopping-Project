import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { icons } from '../../utils/icons';
import { styles } from './styles';

const FooterButton = () => {
  const [isWishlisted, setIsWishlisted] = useState(true);
  return (
    <View style={styles.buttonRow}>
      <TouchableOpacity
        style={styles.heartButton}
        onPress={() => setIsWishlisted(prev => !prev)}
      >
        <Image
          source={isWishlisted ? icons.heart : icons.heartRed}
          style={isWishlisted ? styles.heartIcon : styles.heartIconActive}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.addToCartButton}>
        <Text style={styles.addToCartText}>Add to cart</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buyNowButton}>
        <Text style={styles.buyNowText}>Buy now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FooterButton;
