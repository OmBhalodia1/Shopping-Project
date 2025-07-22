import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from '../../screens/Cart';

const Stack = createNativeStackNavigator();

export default function CartStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Wishlist" component={Cart} />
    </Stack.Navigator>
  );
}
