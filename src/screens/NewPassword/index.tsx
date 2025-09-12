import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text as ReactText,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { images } from '../../utils/images';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/RootStackParamList';
import Avatar from '../../components/Avatar';
import TextInput from '../../components/TextInput';
import Text from '../../components/Text';
import Button from '../../components/Button';
import { styles } from './styles';
import Section from '../../components/Section';

type Props = NativeStackScreenProps<RootStackParamList, 'NewPassword'>;

const NewPassword: React.FC<Props> = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [secureRepeat, setSecureRepeat] = useState(true);

  const handleSave = () => {
    if (newPassword !== repeatPassword) {
      Alert.alert('Passwords do not match!');
      return;
    } else {
      navigation.navigate('HelloCard');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Image source={images.Recovery} style={styles.background} />

      <View style={styles.content}>
        <Avatar />

        <Text style={styles.title} label="Setup New Password" mode="title" />
        <ReactText style={styles.subtitle}>
          Please, setup a new password for{'\n'}your account
        </ReactText>

        <Section
          sectionContent={
            <View style={{ gap: 10 }}>
              <TextInput
                style={styles.input}
                title="New Password"
                secureTextEntry
                value={newPassword}
                onChangeText={setNewPassword}
                autoCorrect={false}
                placeholder="New Password"
              />

              <TextInput
                style={styles.input}
                title="Repeat Password"
                secureTextEntry={secureRepeat}
                value={repeatPassword}
                onChangeText={setRepeatPassword}
                autoCorrect={false}
                placeholder="Repeat Password"
              />
            </View>
          }
        />

        <View style={{ flex: 1 }} />

        <Section
          sectionContent={
            <>
              <Button
                style={styles.saveButton}
                title="Save"
                onPress={handleSave}
              />
              <Button
                style={styles.cancelButton}
                title="Cancel"
                mode="plain"
                onPress={() => navigation.goBack()}
              />
            </>
          }
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default NewPassword;
