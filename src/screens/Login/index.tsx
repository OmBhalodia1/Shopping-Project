import React, { useState, useEffect } from 'react';
import {
  View,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Image,
  Keyboard,
  Text as ReactText,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/RootStackParamList';
import { images } from '../../utils/images';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import Text from '../../components/Text';
import Section from '../../components/Section';
import { styles } from './styles';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithCredential,
} from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { icons } from '../../utils/icons';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '681431626197-5gc5kngeei1o1ss285oj2o48vmi56np0.apps.googleusercontent.com',
    });
  }, []);

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

  const onGoogleButtonPress = async () => {
    try {
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      const signInResult = await GoogleSignin.signIn();
      const idToken = signInResult.data?.idToken;

      if (!idToken) throw new Error('No ID token found!');
      const googleCredential = GoogleAuthProvider.credential(idToken);
      const auth = getAuth();
      const userCredential = await signInWithCredential(auth, googleCredential);

      console.log('✅ Google Sign-In Success:', userCredential.user);
      navigation.replace('HelloCard');
    } catch (err) {
      console.error('❌ Google Sign-In Error:', err);
    }
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

              <TouchableOpacity
                style={styles.googleButton}
                onPress={onGoogleButtonPress}
              >
                <Image
                  source={icons.google}
                  style={{ width: 24, height: 24, marginRight: 10 }}
                  resizeMode="contain"
                />
                <ReactText style={styles.googleText}>
                  Continue with Google
                </ReactText>
              </TouchableOpacity>

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
