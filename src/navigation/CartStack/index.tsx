import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from '../../screens/Cart';
import CartPayment from '../../screens/CartPayment';

const Stack = createNativeStackNavigator();

export default function CartStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="CartPayment" component={CartPayment} />
    </Stack.Navigator>
  );
}
