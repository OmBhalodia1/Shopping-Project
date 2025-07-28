import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Section from '../../components/Section';
import Title from '../../components/Title';
import ReviewsComponent from '../../components/ReviewsComponent';
import { styles } from './styles';

const ShopReviews = () => {
  const reviewData = [4, 5, 5, 5, 5];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Section
          title={<Title label="Reviews" />}
          sectionContent={reviewData.map((stars, index) => (
            <ReviewsComponent starCount={stars} key={index} />
          ))}
        />
      </ScrollView>
    </View>
  );
};

export default ShopReviews;
