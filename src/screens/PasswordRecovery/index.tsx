import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text as ReactText,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { images } from '../../utils/images';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/RootStackParamList';
import Button from '../../components/Button';
import Avatar from '../../components/Avatar';
import Text from '../../components/Text';
import RecoveryOptions from '../../components/RecoveryOptions';
import { styles } from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'PasswordRecovery'>;
const { width, height } = Dimensions.get('window');

const options = [
  { key: 'sms', label: 'SMS' },
  { key: 'email', label: 'Email' },
];

const PasswordRecovery: React.FC<Props> = ({ navigation }) => {
  const [selected, setSelected] = useState('sms');

  return (
    <View style={styles.container}>
      <View />
      <Image source={images.Recovery} style={styles.background} />
      <Avatar />
      <View style={{ marginTop: 300 }}>
        <Text label="Password Recovery" mode="title" style={styles.title} />
        <ReactText style={styles.subtitle}>
          How you would like to restore{'\n'}your password?
        </ReactText>
        <View style={styles.optionsList}>
          {options.map(option => (
            <RecoveryOptions
              key={option.key}
              label={option.key as 'sms' | 'email'}
              selected={selected === option.key}
              onSelect={setSelected}
            />
          ))}
        </View>
        <Button
          style={styles.nextButton}
          title="Next"
          onPress={() => navigation.navigate('PasswordRecoveryCode')}
        />
        <Button
          title="Cancel"
          mode="plain"
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
};

export default PasswordRecovery;
