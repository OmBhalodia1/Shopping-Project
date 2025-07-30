import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { images } from '../../utils/images';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/RootStackParamList';
import Card from '../../components/Card';
import { styles } from './styles';
import Section from '../../components/Section';

type Props = NativeStackScreenProps<RootStackParamList, 'HelloCard'>;

const { width } = Dimensions.get('window');

const HelloCard: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={images.HelloBack}
        style={styles.backgroundImage}
        resizeMode="contain"
      />
      <View style={{ marginTop: 27 }}>
        <Card
          title="Hello"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed non consectetur turpis. Morbi eu eleifend lacus."
          image={images.Hello}
        />

        <Section
          sectionContent={
            <View style={styles.paginationWrapper}>
              <View style={[styles.dot, styles.dotInactive]} />
              <View style={[styles.dot, styles.dotActive]} />
              <View style={[styles.dot, styles.dotInactive]} />
              <TouchableOpacity
                style={[styles.dot, styles.dotInactive]}
                onPress={() => navigation.navigate('ReadyCard')}
              />
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default HelloCard;
