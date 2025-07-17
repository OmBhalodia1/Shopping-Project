import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View, StyleSheet } from 'react-native';
import ProfileScreen from '../screens/Profile';
import { icons } from '../utils/icons';
import { styles } from './styles';
import ShopStack from './ShopStack';
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
          height: 70,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          backgroundColor: '#FFFFFF',
          shadowColor: '#222',
          shadowOpacity: 0.08,
          shadowRadius: 16,
        },
        tabBarIcon: ({ focused }) => {
          let icon;
          switch (route.name) {
            case 'ShopStack':
              icon = icons.shop;
              break;
            case 'Wishlist':
              icon = icons.wislist;
              break;
            case 'Cart':
              icon = icons.cart;
              break;
            case 'Categories':
              icon = icons.categories;
              break;
            case 'Profile':
              icon = icons.bottomProfile;
              break;
          }

          return <TabIcon source={icon} focused={focused} />;
        },
      })}
    >
      <Tab.Screen name="ShopStack" component={ShopStack} />
      <Tab.Screen name="Wishlist" component={DummyScreen} />
      <Tab.Screen name="Categories" component={DummyScreen} />
      <Tab.Screen name="Cart" component={DummyScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
