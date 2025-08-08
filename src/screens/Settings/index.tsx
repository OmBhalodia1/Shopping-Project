import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { styles } from './styles';
import SettingsRow from '../../components/SettingsRow';
import Title from '../../components/Title';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/RootStackParamList';
import Section from '../../components/Section';
import Modal from '../../components/Modal';
import ModalDeleteAccountConfirm from '../../components/ModalDeleteAccountConfirm';

type NavigationProp = StackNavigationProp<
  RootStackParamList,
  'BottomTabNavigator'
>;

export const Settings: React.FC<{ navigation: NavigationProp }> = ({
  navigation,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={{ paddingBottom: Platform.OS === 'android' ? 30 : 0 }}>
        <Title label="Settings" textStyle={{ fontSize: 28 }} />
        <View style={{ marginTop: 10 }} />
        <Section
          title={<Title label="Personal" />}
          sectionContent={
            <>
              <SettingsRow
                label="Profile"
                onPress={() => navigation.navigate('SettingsProfile')}
              />
              <SettingsRow
                label="Shipping Address"
                onPress={() => navigation.navigate('SettingsShippingAddress')}
              />
              <SettingsRow
                label="Payment methods"
                onPress={() => navigation.navigate('SettingsPaymentMethod')}
              />
            </>
          }
        />
        <View style={{ marginTop: 10 }} />
        <Section
          title={<Title label="Shop" />}
          sectionContent={
            <>
              <SettingsRow
                label="Country"
                value="Vietnam"
                onPress={() => navigation.navigate('SettingsCountry')}
              />
              <SettingsRow
                label="Currency"
                value="$ USD"
                onPress={() => navigation.navigate('SettingsCurrency')}
              />
              <SettingsRow
                label="Sizes"
                value="UK"
                onPress={() => navigation.navigate('SettingsSizes')}
              />
              <SettingsRow label="Terms and Conditions" />
            </>
          }
        />
        <View style={{ marginTop: 10 }} />
        <Section
          title={<Title label="Account" />}
          sectionContent={
            <>
              <SettingsRow
                label="Language"
                value="English"
                onPress={() => navigation.navigate('SettingsLanguage')}
              />
              <SettingsRow
                label="About Slada"
                onPress={() => navigation.navigate('About')}
              />
            </>
          }
        />
        <Section
          sectionContent={
            <>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Text style={styles.delete}>Delete My Account</Text>
              </TouchableOpacity>
            </>
          }
        />
        <Section
          sectionContent={
            <View style={styles.footer}>
              <Text style={styles.footerBrand}>Slada</Text>
              <Text style={styles.footerVersion}>Version 1.0 April, 2020</Text>
            </View>
          }
        />
        <Modal
          modalContent={
            <ModalDeleteAccountConfirm
              visible={modalVisible}
              onRequestClose={() => setModalVisible(false)}
              onDelete={() => setModalVisible(false)}
            />
          }
        />
      </View>
    </ScrollView>
  );
};

export default Settings;
