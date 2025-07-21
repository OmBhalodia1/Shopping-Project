import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { images } from '../../utils/images';
import { icons } from '../../utils/icons';
import { styles } from './styles';

type ReviewsComponentProps = {
  starCount?: number;
  name?: string;
  subText?: string;
};
const ReviewsComponent: React.FC<ReviewsComponentProps> = ({
  starCount = 0,
  name = 'Veronika',
  subText = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed ...',
}) => {
  const totalStars = 5;
  const starIcons = Array.from({ length: totalStars }, (_, index) => (
    <Image
      key={index}
      source={index < starCount ? icons.starFilled : icons.starNotFilled}
      resizeMode="contain"
      style={styles.starIcon}
    />
  ));

  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <View style={styles.imageBorder}>
        <Image
          source={images.ReviewGirl}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <View style={{ flex: 1, marginLeft: 10, marginTop: 4 }}>
        <Text style={styles.nameText}>{name}</Text>
        <View style={styles.starContainer}>{starIcons}</View>
        <Text style={styles.reviewText}>{subText}</Text>
      </View>
    </View>
  );
};

export default ReviewsComponent;
