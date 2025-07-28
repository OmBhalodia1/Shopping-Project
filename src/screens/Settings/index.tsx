import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import SettingsRow from '../../components/SettingsRow';
import Title from '../../components/Title';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/RootStackParamList';

type NavigationProp = StackNavigationProp<
  RootStackParamList,
  'BottomTabNavigator'
>;

export const Settings: React.FC<{ navigation: NavigationProp }> = ({
  navigation,
}) => {
  return (
    <ScrollView style={styles.container}>
      <Title label="Settings" />

      <Text style={styles.section}>Personal</Text>
      <SettingsRow
        label="Profile"
        onPress={() => navigation.navigate('SettingsProfile')}
      />
      <SettingsRow label="Shipping Address" />
      <SettingsRow label="Payment methods" />

      <Text style={styles.section}>Shop</Text>
      <SettingsRow label="Country" value="Vietnam" />
      <SettingsRow label="Currency" value="$ USD" />
      <SettingsRow label="Sizes" value="UK" />
      <SettingsRow label="Terms and Conditions" />

      <Text style={styles.section}>Account</Text>
      <SettingsRow label="Language" value="English" />
      <SettingsRow label="About Slada" />

      <TouchableOpacity>
        <Text style={styles.delete}>Delete My Account</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerBrand}>Slada</Text>
        <Text style={styles.footerVersion}>Version 1.0 April, 2020</Text>
      </View>
    </ScrollView>
  );
};

export default Settings;
