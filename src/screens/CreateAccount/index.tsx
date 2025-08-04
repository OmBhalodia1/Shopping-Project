import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput as ReactTextInput,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
} from 'react-native';
import { images } from '../../utils/images';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/RootStackParamList';
import Button from '../../components/Button';
import { styles } from './styles';
import TextInput from '../../components/TextInput';
import Section from '../../components/Section';

type Props = NativeStackScreenProps<RootStackParamList, 'CreateAccount'>;

const CreateAccount: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
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
              <TextInput title="Email" />
              <TextInput title="Password" secureTextEntry />

              <Section
                sectionContent={
                  <View style={styles.inputRow}>
                    <Text style={styles.flag}>🇬🇧</Text>
                    <Text style={styles.dropdown}>▼</Text>
                    <Text style={styles.separator}>|</Text>
                    <ReactTextInput
                      style={styles.inputInner}
                      placeholder="Your number"
                      placeholderTextColor="#bcbcbc"
                    />
                  </View>
                }
              />

              <Section
                sectionContent={
                  <View style={styles.buttonContainer}>
                    <Button
                      title="Done"
                      style={styles.doneText}
                      onPress={() => navigation.navigate('HelloCard')}
                    />
                    <Button
                      mode="plain"
                      title="Cancel"
                      style={styles.cancelText}
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
