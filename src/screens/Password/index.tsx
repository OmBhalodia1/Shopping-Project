import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Pressable,
  Text as ReactText,
} from 'react-native';
import { images } from '../../utils/images';
import Text from '../../components/Text';
import ArrowButton from '../../components/ArrowButton';
import TextInput from '../../components/TextInput';
import Avatar from '../../components/Avatar';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/RootStackParamList';
const { width, height } = Dimensions.get('window');
type Props = NativeStackScreenProps<RootStackParamList, 'Password'>;

const Password: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={[styles.container]}>
      <Image
        source={images.Password}
        style={[styles.backgroundImage, { width, height: height * 0.45 }]}
        resizeMode="cover"
      />
      <Avatar />

      <View style={[styles.content, { marginTop: height * 0.34 }]}>
        <Text style={styles.header} label="Hello, Romina!!" mode="title" />
        <Text
          style={styles.subtext}
          label="Type your password"
          mode="subtext"
        />
        <TextInput
          title="Password here..             "
          secureTextEntry
          onSubmitEditing={() => navigation.navigate('HelloCard')}
        />
        <Pressable onPress={() => navigation.navigate('PasswordRecovery')}>
          <ReactText style={{ marginTop: 30 }}>Forget your password?</ReactText>
        </Pressable>
      </View>

      <ArrowButton
        title="Not you?"
        style={[styles.notYouContainer, { paddingBottom: 69 }]}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default Password;
