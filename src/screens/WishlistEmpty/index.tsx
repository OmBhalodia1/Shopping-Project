import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Title from '../../components/Title';
import ImageRow from '../../components/ImageRow';
import { images } from '../../utils/images';
import ArrowButton from '../../components/ArrowButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/RootStackParamList';
import Section from '../../components/Section';
import ShopSeeAllSection from '../../components/ShopSeeAllSection';
import MostPopularItemList from '../../components/MostPopularItemList';
import { styles } from './styles';

const recentlyViewed = [
  { source: images.RecentlyViewed1 },
  { source: images.RecentlyViewed2 },
  { source: images.RecentlyViewed3 },
  { source: images.RecentlyViewed4 },
  { source: images.RecentlyViewed5 },
];

type NavigationProp = StackNavigationProp<
  RootStackParamList,
  'BottomTabNavigator'
>;

const WishlistEmpty: React.FC<{ navigation: NavigationProp }> = ({
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Title label="Wishlist" textStyle={styles.section} />
        <Section
          title={
            <Title
              label="Recently Viewed"
              rightElement={
                <ArrowButton
                  title=""
                  style={styles.arrowButton}
                  onPress={() => navigation.navigate('WishlistRecentlyViewed')}
                />
              }
            />
          }
          sectionContent={<ImageRow imageList={recentlyViewed} />}
        />
        <View style={styles.image}>
          <Image source={images.wishlistEmpty} resizeMode="contain" />
        </View>
        <Section
          title={
            <Title label="Most Popular" rightElement={<ShopSeeAllSection />} />
          }
          sectionContent={<MostPopularItemList />}
        />
      </View>
    </View>
  );
};

export default WishlistEmpty;
