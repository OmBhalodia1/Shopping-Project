import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Wishlist from '../../screens/Wishlist';
import WishlistEmpty from '../../screens/WishlistEmpty';
import WishlistRecentlyViewed from '../../screens/WishlistRecentlyViewed';

const Stack = createNativeStackNavigator();

export default function WishlistStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Wishlist" component={Wishlist} />
      <Stack.Screen name="WishlistEmpty" component={WishlistEmpty} />
      <Stack.Screen
        name="WishlistRecentlyViewed"
        component={WishlistRecentlyViewed}
      />
    </Stack.Navigator>
  );
}
