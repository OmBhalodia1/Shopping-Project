import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Section from '../../components/Section';
import Title from '../../components/Title';
import JustForYouList from '../../components/JustForYouList';
import { AllItems } from '../ShopClothing/data';
import { styles } from './styles';
import { maxWorkers } from '../../../metro.config';

const WishlistRecentlyViewed = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.innerContainer}
        showsVerticalScrollIndicator={false}
      >
        <Section
          title={<Title label="Recently Viewed" />}
          sectionContent={
            <View style={{ marginTop: 10 }}>
              <JustForYouList products={AllItems} />
            </View>
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default WishlistRecentlyViewed;
