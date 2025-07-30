import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Image,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/RootStackParamList';
import { images } from '../../utils/images';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import Text from '../../components/Text';
import { styles } from './styles';
import Section from '../../components/Section';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login: React.FC<Props> = ({ navigation }) => {
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
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
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
              <TextInput title="Email" />
              <Button
                title="Next"
                onPress={() => navigation.navigate('Password')}
              />
            </View>
            <Button
              title="Cancel"
              mode="plain"
              onPress={() => navigation.goBack()}
            />
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};

export default Login;
