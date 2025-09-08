import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Image,
  Dimensions,
  Pressable,
  Text as ReactText,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Keyboard,
  TextInput as RNTextInput,
} from 'react-native';
import { images } from '../../utils/images';
import Text from '../../components/Text';
import ArrowButton from '../../components/ArrowButton';
import Avatar from '../../components/Avatar';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/RootStackParamList';
import Section from '../../components/Section';

const { width, height } = Dimensions.get('window');
type Props = NativeStackScreenProps<RootStackParamList, 'Password'>;

const Password: React.FC<Props> = ({ navigation }) => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputs = useRef<(RNTextInput | null)[]>([]);

  useEffect(() => {
    if (Platform.OS === 'android' && Platform.Version <= 14) {
      const showSub = Keyboard.addListener('keyboardDidShow', e => {
        setKeyboardHeight(e.endCoordinates.height);
      });
      const hideSub = Keyboard.addListener('keyboardDidHide', () => {
        setKeyboardHeight(0);
      });
      return () => {
        showSub.remove();
        hideSub.remove();
      };
    }
  }, []);

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < otp.length - 1) {
      inputs.current[index + 1]?.focus();
    }

    if (index === otp.length - 1 && text) {
      navigation.navigate('HelloCard'); // navigate when last digit entered
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <View style={[styles.container]}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Image
            source={images.Password}
            style={[styles.backgroundImage, { width, height: height * 0.45 }]}
            resizeMode="cover"
          />
          <Avatar />
          <Section
            sectionContent={
              <View style={[styles.content, { marginTop: height * 0.34 }]}>
                <Text
                  style={styles.header}
                  label="Hello, Romina!!"
                  mode="title"
                />
                <Text
                  style={styles.subtext}
                  label="Type your password"
                  mode="subtext"
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginVertical: 20,
                  }}
                >
                  {otp.map((digit, index) => (
                    <RNTextInput
                      key={index}
                      ref={ref => {
                        inputs.current[index] = ref;
                      }}
                      value={digit}
                      onChangeText={text => handleChange(text, index)}
                      onKeyPress={e => handleKeyPress(e, index)}
                      keyboardType="number-pad"
                      maxLength={1}
                      secureTextEntry
                      style={{
                        width: 60,
                        height: 60,
                        borderRadius: 12,
                        backgroundColor: '#f5f5f5',
                        textAlign: 'center',
                        fontSize: 20,
                        fontWeight: 'bold',
                        margin: 5,
                      }}
                    />
                  ))}
                </View>

                <Pressable
                  onPress={() => navigation.navigate('PasswordRecovery')}
                >
                  <ReactText>Forget your password?</ReactText>
                </Pressable>
              </View>
            }
          />
          <View style={{ flex: 1, marginBottom: 20 }}>
            <ArrowButton
              title="Not you?"
              style={styles.notYouContainer}
              onPress={() => navigation.goBack()}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Password;
