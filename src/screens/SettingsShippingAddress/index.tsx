import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Title from '../../components/Title';
import Section from '../../components/Section';
import ArrowButton from '../../components/ArrowButton';
import Button from '../../components/Button';
import { styles } from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/RootStackParamList';

type NavigationProp = StackNavigationProp<
  RootStackParamList,
  'BottomTabNavigator'
>;
const SettingsShippingAddress: React.FC<{ navigation: NavigationProp }> = ({
  navigation,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Title label="Settings" textStyle={{ fontSize: 28 }} />
        <Text
          style={{
            fontWeight: '400',
            fontSize: 20,
            marginVertical: 10,
          }}
        >
          Shipping Address
        </Text>{' '}
        <View style={{ marginTop: 10 }} />
        <Section
          title={
            <Text
              style={{
                fontWeight: '400',
                fontSize: 20,
                marginTop: 10,
              }}
            >
              Country
            </Text>
          }
          sectionContent={
            <TouchableOpacity
              onPress={() => navigation.navigate('SettingsCountry')}
            >
              <Title
                label="Chooose your country"
                rightElement={
                  <ArrowButton
                    title=""
                    onPress={() => navigation.navigate('SettingsCountry')}
                  />
                }
              />
            </TouchableOpacity>
          }
        />
        <View style={{ marginTop: 10 }} />
        <Section
          sectionContent={
            <>
              <Text style={styles.label}>Address</Text>
              <TextInput
                style={styles.input}
                placeholder="Required"
                placeholderTextColor="#B0BCEB"
              />
            </>
          }
        />
        <Section
          sectionContent={
            <>
              <Text style={styles.label}>Town / City</Text>
              <TextInput
                style={styles.input}
                placeholder="Required"
                placeholderTextColor="#B0BCEB"
              />
            </>
          }
        />
        <Section
          sectionContent={
            <>
              <Text style={styles.label}>Postcode</Text>
              <TextInput
                style={styles.input}
                placeholder="Required"
                placeholderTextColor="#B0BCEB"
              />
            </>
          }
        />
        <Section
          sectionContent={
            <>
              <Text style={styles.label}>Phone Number</Text>
              <TextInput
                style={styles.input}
                placeholder="Required"
                placeholderTextColor="#B0BCEB"
              />
            </>
          }
        />
        <Section
          sectionContent={
            <Button title="Save Changes" style={{ marginTop: 80 }} />
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default SettingsShippingAddress;
