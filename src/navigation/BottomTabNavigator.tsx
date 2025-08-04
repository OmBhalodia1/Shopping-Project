import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View, StyleSheet } from 'react-native';
import { icons } from '../utils/icons';
import { styles } from './styles';
import ShopStack from './ShopStack';
import WishlistStack from './WishlistStack';
import CartStack from './CartStack';
import ProfileStack from './ProfileStack';
const Tab = createBottomTabNavigator();

type TabIconProps = {
  source: any;
  focused: boolean;
};

function TabIcon({ source, focused }: TabIconProps) {
  return (
    <View style={styles.iconContainer}>
      <Image
        source={source}
        style={[styles.icon, { tintColor: focused ? '#000000' : '#004CFF' }]}
      />
      {focused && <View style={styles.underline} />}
    </View>
  );
}

function DummyScreen() {
  return <View style={{ flex: 1, backgroundColor: '#FFFFFF' }} />;
}

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          // height: 70,
          // borderTopLeftRadius: 24,
          // borderTopRightRadius: 24,
          backgroundColor: '#FFFFFF',
        },
        tabBarIcon: ({ focused }) => {
          let icon;
          switch (route.name) {
            case 'ShopStack':
              icon = icons.shop;
              break;
            case 'WishlistStack':
              icon = icons.wislist;
              break;
            case 'CartStack':
              icon = icons.cart;
              break;
            case 'Categories':
              icon = icons.categories;
              break;
            case 'ProfileStack':
              icon = icons.bottomProfile;
              break;
          }

          return <TabIcon source={icon} focused={focused} />;
        },
      })}
    >
      <Tab.Screen name="ShopStack" component={ShopStack} />
      <Tab.Screen name="WishlistStack" component={WishlistStack} />
      <Tab.Screen name="Categories" component={DummyScreen} />
      <Tab.Screen name="CartStack" component={CartStack} />
      <Tab.Screen name="ProfileStack" component={ProfileStack} />
    </Tab.Navigator>
  );
}
