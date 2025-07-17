import React from 'react';
import { View, Image, SafeAreaView, StatusBar, Platform } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/RootStackParamList';
import { images } from '../../utils/images';
import { styles } from './styles';

import Button from '../../components/Button';
import ArrowButton from '../../components/ArrowButton';
import Text from '../../components/Text';

type Props = NativeStackScreenProps<RootStackParamList, 'Start'>;

const Start: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="white"
        translucent={true}
      />
      <View style={styles.mainContainer}>
        <View style={styles.content}>
          <View style={styles.iconWrapper}>
            <Image
              source={images.bag}
              style={styles.icon}
              resizeMode="contain"
            />
          </View>

          <View style={styles.text}>
            <Text mode="title" label="Shoppe" />
            <View>
              <Text mode="subtext" label="Beautiful eCommerce UI Kit" />
              <Text mode="subtext" label="for your online store" />
            </View>
          </View>
        </View>

        <View style={styles.bottomButtons}>
          <Button
            title="Let's get started"
            style={styles.button}
            onPress={() => navigation.navigate('CreateAccount')}
          />
          <ArrowButton
            title="I already have an account"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Start;
