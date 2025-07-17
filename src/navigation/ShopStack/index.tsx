import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShopScreen from '../../screens/Shop';
import ShopCLothing from '../../screens/ShopClothing';

import ShopSearch from '../../screens/ShopSearch';

const Stack = createNativeStackNavigator();

export default function ShopStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Shop" component={ShopScreen} />
      <Stack.Screen name="ShopClothing" component={ShopCLothing} />
      <Stack.Screen name="ShopSearch" component={ShopSearch} />
    </Stack.Navigator>
  );
}
