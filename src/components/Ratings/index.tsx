import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { icons } from '../../utils/icons';
import { styles } from './styles';

const Ratings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image source={icons.starFilled} resizeMode="contain" />
        <Image source={icons.starFilled} resizeMode="contain" />
        <Image source={icons.starFilled} resizeMode="contain" />
        <Image source={icons.starFilled} resizeMode="contain" />
        <Image source={icons.starNotFilled} resizeMode="contain" />
      </View>
      <View style={styles.ratingText}>
        <Text
          style={{
            fontSize: 15.5,
            color: '#202020',
            fontWeight: '600',
            flex: 1,
          }}
        >
          4/5
        </Text>
      </View>
    </View>
  );
};

export default Ratings;
