import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Section from '../../components/Section';
import Title from '../../components/Title';
import ReviewsComponent from '../../components/ReviewsComponent';
import { styles } from './styles';
const Reviews = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Section
          title={<Title label="Reviews" />}
          sectionContent={[
            <ReviewsComponent starCount={4} key={'r1'} />,
            <ReviewsComponent starCount={5} key={'r2'} />,
            <ReviewsComponent starCount={5} key={'r3'} />,
            <ReviewsComponent starCount={5} key={'r4'} />,
            <ReviewsComponent starCount={5} key={'r5'} />,
          ]}
        />
      </ScrollView>
    </View>
  );
};

export default Reviews;
