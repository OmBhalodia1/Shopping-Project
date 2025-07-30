import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import { images } from '../../utils/images';
import { icons } from '../../utils/icons';
import Button from '../../components/Button';
import { styles } from './styles';
import { RootStackParamList } from '../../types/RootStackParamList';
import { StackNavigationProp } from '@react-navigation/stack';
import Section from '../../components/Section';

type NavigationProp = StackNavigationProp<
  RootStackParamList,
  'BottomTabNavigator'
>;

export const SettingsProfile: React.FC<{ navigation: NavigationProp }> = ({
  navigation,
}) => {
  const [name, setName] = useState('Romina');
  const [email, setEmail] = useState('gmail@example.com');
  const [password, setPassword] = useState('adadadadadad');

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView style={styles.container}>
        <Section
          title={
            <>
              <Text style={styles.header}>Settings</Text>
              <Text style={styles.subtitle}>Your Profile</Text>
            </>
          }
          sectionContent={
            <View style={styles.profilePicWrapper}>
              <Image source={images.avatarProfile} style={styles.profilePic} />

              <TouchableOpacity style={styles.editIconWrapper}>
                <Image
                  source={icons.edit}
                  style={styles.editIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          }
        />

        <Section
          sectionContent={
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Full Name"
                placeholderTextColor="#aaa"
              />
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                placeholderTextColor="#aaa"
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                secureTextEntry
                placeholderTextColor="#aaa"
              />
            </View>
          }
        />
        <Section
          sectionContent={
            <Button
              title="Save Changes"
              style={styles.saveButton}
              onPress={() => navigation.goBack()}
            />
          }
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SettingsProfile;
