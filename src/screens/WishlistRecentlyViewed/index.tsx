import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Section from '../../components/Section';
import Title from '../../components/Title';
import JustForYouList from '../../components/JustForYouList';
import { AllItems } from '../ShopClothing/data';
import { styles } from './styles';

const WishlistRecentlyViewed = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.innerContainer}>
        <Section
          title={<Title label="Recently Viewed" />}
          sectionContent={<JustForYouList products={AllItems} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default WishlistRecentlyViewed;
