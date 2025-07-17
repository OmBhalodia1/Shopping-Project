import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  Text as ReactText,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { images } from '../../utils/images';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/RootStackParamList';
import Avatar from '../../components/Avatar';
import Button from '../../components/Button';
import Text from '../../components/Text';
import Modal from '../../components/Modal';
import { styles } from './styles';

const OTP_LENGTH = 4;
const DEFAULT_OTP = '1234';
const MAX_ATTEMPTS = 3;

type Props = NativeStackScreenProps<RootStackParamList, 'PasswordRecoveryCode'>;

const PasswordRecoveryCode: React.FC<Props> = ({ navigation }) => {
  const [otp, setOtp] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [locked, setLocked] = useState(false);
  const inputRef = useRef<TextInput>(null);
  const inputDots = Array.from({ length: OTP_LENGTH }, (_, i) => i);

  const handleOtpChange = (text: string) => {
    const newOtp = text.slice(0, OTP_LENGTH);
    setOtp(newOtp);

    if (newOtp.length === OTP_LENGTH) {
      if (newOtp === DEFAULT_OTP) {
        navigation.navigate('NewPassword');
      } else {
        const newAttempts = attempts + 1;
        setAttempts(newAttempts);
        setOtp('');
        if (newAttempts >= MAX_ATTEMPTS) {
          setLocked(true);
        }
      }
    }
  };

  const handleOkay = () => {
    setLocked(false);
    setOtp('');
    setAttempts(0);
  };

  return (
    <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
      <View style={styles.container}>
        <Image source={images.Recovery} style={styles.background} />
        <Avatar />

        <Text label="Password Recovery" mode="title" style={styles.title} />
        <ReactText style={styles.subtitle}>
          Enter 4-digits code we sent you{'\n'}on your phone number
        </ReactText>
        <ReactText style={styles.phoneNumber}>+98******00</ReactText>
        <View style={styles.dotsRow}>
          <FlatList
            data={inputDots}
            keyExtractor={item => item.toString()}
            horizontal
            scrollEnabled={false}
            renderItem={({ item: i }) => (
              <View
                style={[
                  styles.dot,
                  { backgroundColor: otp[i] ? '#0059fd' : '#e3ebff' },
                ]}
              />
            )}
            contentContainerStyle={styles.flatListContent}
          />
          <TextInput
            ref={inputRef}
            style={styles.hiddenInput}
            value={otp}
            onChangeText={handleOtpChange}
            maxLength={OTP_LENGTH}
            keyboardType="number-pad"
            autoFocus
            onSubmitEditing={Keyboard.dismiss}
            editable={!locked}
          />
        </View>
        <Button title="Send Again" style={styles.sendAgainButton} />
        <Button
          title="Cancel"
          style={styles.cancelButton}
          mode="plain"
          onPress={() => navigation.goBack()}
        />
        <Modal visible={locked} onOkay={handleOkay} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PasswordRecoveryCode;
