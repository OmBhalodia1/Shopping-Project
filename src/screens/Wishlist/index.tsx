import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Title from '../../components/Title';
import ImageRow from '../../components/ImageRow';
import { images } from '../../utils/images';
import ArrowButton from '../../components/ArrowButton';
import WishlistSection from '../../components/WishlistSection';
import { styles } from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/RootStackParamList';
import Section from '../../components/Section';
import VariationRow from '../../components/VariationRow';

const recentlyViewed = [
  { source: images.RecentlyViewed1 },
  { source: images.RecentlyViewed2 },
  { source: images.RecentlyViewed3 },
  { source: images.RecentlyViewed4 },
  { source: images.RecentlyViewed5 },
];

const wishlistItems = [
  { image: images.JustForYou3, price: 17 },
  { image: images.JustForYou1, price: 17, discountedPrice: 12 },
  { image: images.MostPopular1, price: 27 },
  { image: images.JustForYou2, price: 19 },
  { image: images.MostPopular2, price: 17 },
  { image: images.MostPopular3, price: 17 },
];

type NavigationProp = StackNavigationProp<
  RootStackParamList,
  'BottomTabNavigator'
>;

const Wishlist: React.FC<{ navigation: NavigationProp }> = ({ navigation }) => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.innerContainer}>
        <Title label="Wishlist" textStyle={{ fontSize: 25, marginTop: 10 }} />
        <Section
          title={
            <VariationRow
              title="Recently Viewed"
              arrowCircle
              onPressArrow={() => navigation.navigate('WishlistRecentlyViewed')}
            />
          }
          sectionContent={
            <>
              <View style={{ marginTop: 10 }} />
              <ImageRow
                key="recently-viewed-images"
                imageList={recentlyViewed}
              />

              {wishlistItems.map((item, index) => (
                <WishlistSection
                  key={`wishlist-item-${index}`}
                  image={item.image}
                  price={item.price}
                  discountedPrice={item.discountedPrice}
                />
              ))}
            </>
          }
        />
      </View>
    </ScrollView>
  );
};

export default Wishlist;
