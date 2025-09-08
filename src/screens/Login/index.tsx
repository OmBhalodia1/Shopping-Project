import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Image,
  TextInput as RNTextInput,
  Keyboard,
  Text as ReactText,
  TouchableOpacity,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/RootStackParamList';
import { images } from '../../utils/images';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import Text from '../../components/Text';
import Section from '../../components/Section';
import { styles } from './styles';
type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const onNextPress = () => {
    Keyboard.dismiss();
    if (!email) {
      setError('Email is required');
      return;
    }
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    setError('');
    navigation.navigate('Password');
  };

  return (
    <View style={styles.root}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <ImageBackground
        source={images.Login}
        style={styles.background}
        resizeMode="cover"
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'android' ? 20 : 40}
          style={styles.keyboardAvoiding}
        >
          <View style={styles.container}>
            <Section
              sectionContent={
                <View style={styles.headerSection}>
                  <Text style={styles.header} label="Login" mode="title" />
                  <View style={{ flexDirection: 'row' }}>
                    <Text
                      style={styles.subHeader}
                      label="Good to see you back!"
                      mode="subtext"
                    />
                    <Image source={images.Heart} style={styles.heart} />
                  </View>
                </View>
              }
            />
            <View style={styles.gap}>
              <TextInput
                title="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Enter your email"
              />
              {error ? (
                <Text mode="subtext" style={styles.errorText} label={error} />
              ) : null}
              <Button
                title="Next"
                onPress={onNextPress}
                style={styles.nextButton}
              />
            </View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ReactText style={styles.cancelText}>Cancel </ReactText>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};

export default Login;
