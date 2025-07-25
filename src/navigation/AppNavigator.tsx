import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/RootStackParamList';
import Start from '../screens/Start';
import CreateAccount from '../screens/CreateAccount';
import Login from '../screens/Login';
import Password from '../screens/Password';
import PasswordRecovery from '../screens/PasswordRecovery';
import PasswordRecoveryCode from '../screens/PasswordRecoveryCode';
import NewPassword from '../screens/NewPassword';
import HelloCard from '../screens/HelloCard';
import ReadyCard from '../screens/ReadyCard';
import BottomTabNavigator from './BottomTabNavigator';
import AllCategories from '../screens/CategoriesFilter';
import CategoriesFilter from '../screens/CategoriesFilter';
import ShopFilter from '../screens/ShopFilter';
import { Product } from '../screens/Product';
import ProductVariations from '../screens/ProductVariations';
import Reviews from '../screens/Reviews';
import Wishlist from '../screens/Wishlist';
import WishlistEmpty from '../screens/WishlistEmpty';
import WishlistRecentlyViewed from '../screens/WishlistRecentlyViewed';
import CartPayment from '../screens/CartPayment';
import ProfileToReceive from '../screens/ProfileToReceive';
import ProfileToReceiveProgress from '../screens/ProfileToReceiveProgress';
import ProfileDeliveryNotifications from '../screens/ProfileDeliveryNotification';
import ProfileHistory from '../screens/ProfileHistory';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Start"
      screenOptions={{
        headerTransparent: true,
        headerTitleAlign: 'center',
        headerTintColor: '#222',
        headerStyle: { backgroundColor: 'transparent' },
      }}
    >
      <Stack.Screen
        name="Start"
        component={Start}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Password"
        component={Password}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PasswordRecovery"
        component={PasswordRecovery}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PasswordRecoveryCode"
        component={PasswordRecoveryCode}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewPassword"
        component={NewPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HelloCard"
        component={HelloCard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ReadyCard"
        component={ReadyCard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CategoriesFilter"
        component={CategoriesFilter}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ShopFilter"
        component={ShopFilter}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Reviews"
        component={Reviews}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Wishlist"
        component={Wishlist}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WishlistEmpty"
        component={WishlistEmpty}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WishlistRecentlyViewed"
        component={WishlistRecentlyViewed}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CartPayment"
        component={CartPayment}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProfileToReceive"
        component={ProfileToReceive}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProfileToReceiveProgress"
        component={ProfileToReceiveProgress}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProfileHistory"
        component={ProfileHistory}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
