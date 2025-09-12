import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput as ReactTextInput,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  Alert,
} from 'react-native';
import { images } from '../../utils/images';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/RootStackParamList';
import Button from '../../components/Button';
import { styles } from './styles';
import TextInput from '../../components/TextInput';
import Section from '../../components/Section';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

type Props = NativeStackScreenProps<RootStackParamList, 'CreateAccount'>;

const CreateAccount: React.FC<Props> = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{6,15}$/;
  const validateForm = () => {
    if (!email.trim() || !password.trim() || !phone.trim()) {
      Alert.alert('Validation', 'Please fill all required fields.');
      return false;
    }
    if (!emailRegex.test(email.trim())) {
      Alert.alert('Validation', 'Please enter a valid email address.');
      return false;
    }
    if (!phoneRegex.test(phone.trim())) {
      Alert.alert(
        'Validation',
        'Please enter a valid phone number (6-15 digits).',
      );
      return false;
    }
    if (password.length < 6) {
      Alert.alert('Validation', 'Password must be at least 6 characters.');
      return false;
    }
    return true;
  };

  const onDonePress = () => {
    if (validateForm()) {
      navigation.navigate('HelloCard');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <StatusBar translucent backgroundColor="transparent" />
      <Image
        source={images.bubbles}
        style={styles.background}
        resizeMode="stretch"
      />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.container}>
            <Text style={styles.header}>Create{'\n'}Account</Text>

            <View style={styles.form}>
              <TextInput
                title="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
              <TextInput
                title="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />

              <Section
                sectionContent={
                  <View style={styles.inputRow}>
                    <Text style={styles.flag}>🇬🇧</Text>
                    <Text style={styles.dropdown}>▼</Text>
                    <Text style={styles.separator}>|</Text>
                    <ReactTextInput
                      style={[styles.inputInner, { color: '#000' }]}
                      placeholder="Your number"
                      placeholderTextColor="#bcbcbc"
                      keyboardType="phone-pad"
                      maxLength={10}
                      value={phone}
                      onChangeText={text => {
                        const numericText = text.replace(/[^0-9]/g, '');
                        setPhone(numericText);
                      }}
                    />
                  </View>
                }
              />

              <Section
                sectionContent={
                  <View
                    style={[
                      styles.buttonContainer,
                      { paddingBottom: insets.bottom },
                    ]}
                  >
                    <Button title="Done" onPress={onDonePress} />
                    <Button
                      mode="plain"
                      title="Cancel"
                      onPress={() => navigation.goBack()}
                    />
                  </View>
                }
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CreateAccount;
