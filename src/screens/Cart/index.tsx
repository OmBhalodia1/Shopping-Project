import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Title from '../../components/Title';
import InfoSection from '../../components/InfoSection';
import CartSection from '../../components/CartSection';
import { images } from '../../utils/images';
import Section from '../../components/Section';
import WishlistSection from '../../components/WishlistSection';
import { styles } from './styles';
import CartFooter from '../../components/CartFooter';

const Cart = () => {
  const wishlistItems = [
    { image: images.JustForYou3, price: 17 },
    { image: images.JustForYou1, price: 17, discountedPrice: 12 },
    { image: images.MostPopular1, price: 27 },
    { image: images.JustForYou2, price: 19 },
    { image: images.MostPopular2, price: 17 },
    { image: images.MostPopular3, price: 17 },
  ];
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.innerContainer}>
          <View style={{ flexDirection: 'row' }}>
            <Title label="Cart" />
            <View style={styles.circle}>
              <Text style={styles.number}>2</Text>
            </View>
          </View>
          <InfoSection
            info="Shipping Address"
            address="26, Duong So 2, Thao Dien Ward, An Phu, District 2, Ho Chi Minh city"
          />
          <CartSection image={images.AllItems2} />
          <CartSection image={images.AllItems4} />

          <Section
            title={<Title label="From Your Wishlist" />}
            sectionContent={wishlistItems.map((item, index) => (
              <WishlistSection
                key={`wishlist-item-${index}`}
                image={item.image}
                price={item.price}
                discountedPrice={item.discountedPrice}
              />
            ))}
          />
        </View>
      </ScrollView>
      <CartFooter />
    </View>
  );
};

export default Cart;
