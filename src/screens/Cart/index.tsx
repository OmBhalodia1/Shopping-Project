import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import Title from '../../components/Title';
import InfoSection from '../../components/InfoSection';
import CartSection from '../../components/CartSection';
import { images } from '../../utils/images';
import Section from '../../components/Section';
import WishlistSection from '../../components/WishlistSection';
import CartFooter from '../../components/CartFooter';
import ShopSeeAllSection from '../../components/ShopSeeAllSection';
import MostPopularItemList from '../../components/MostPopularItemList';
import { styles } from './styles';
import { CartItems } from './data';
import { wishlistItems } from './data';
import { RootStackParamList } from '../../types/RootStackParamList';
import { StackNavigationProp } from '@react-navigation/stack';

type NavigationProp = StackNavigationProp<
  RootStackParamList,
  'BottomTabNavigator'
>;
const Cart: React.FC<{ navigation: NavigationProp }> = ({ navigation }) => {
  const [cartItems, setCartItems] = useState(CartItems);

  const total = cartItems.reduce((sum, item) => {
    const price = item.discountedPrice ?? item.price;
    return sum + price * item.quantity;
  }, 0);

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    setCartItems(prev =>
      prev
        .map(item =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item,
        )
        .filter(item => item.quantity > 0),
    );
  };

  return (
    <View style={styles.root}>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.innerContainer}>
          <View style={styles.header}>
            <Title label="Cart" />
            <View style={styles.circle}>
              <Text style={styles.number}>{cartItems.length}</Text>
            </View>
          </View>

          <InfoSection
            info="Shipping Address"
            address="26, Duong So 2, Thao Dien Ward, An Phu, District 2, Ho Chi Minh city"
          />

          {cartItems.length === 0 ? (
            <View style={styles.image}>
              <Image source={images.CartEmpty} resizeMode="contain" />
            </View>
          ) : (
            cartItems.map(item => (
              <CartSection
                key={item.id}
                id={item.id}
                image={item.image}
                price={item.price}
                discountedPrice={item.discountedPrice}
                quantity={item.quantity}
                subtext={item.subtext}
                onQuantityChange={handleQuantityChange}
              />
            ))
          )}

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
        <Section
          title={
            <Title label="Most Popular" rightElement={<ShopSeeAllSection />} />
          }
          sectionContent={<MostPopularItemList />}
        />
      </ScrollView>

      <CartFooter
        total={total}
        isCartEmpty={cartItems.length === 0}
        onPress={() => navigation.navigate('CartPayment')}
      />
    </View>
  );
};

export default Cart;
