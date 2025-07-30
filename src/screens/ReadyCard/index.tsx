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

type Props = NativeStackScreenProps<RootStackParamList, 'ReadyCard'>;

const { width } = Dimensions.get('window');

const ReadyCard: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={images.ReadyBack}
        style={styles.backgroundImage}
        resizeMode="contain"
      />
      <View style={{ marginTop: 27 }}>
        <Card
          image={images.Ready}
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          title="Ready?"
          showButton={true}
          buttonText="Let's Start"
          onButtonPress={() => navigation.navigate('BottomTabNavigator')}
        />

        <Section
          sectionContent={
            <View style={styles.paginationWrapper}>
              <View style={[styles.dot, styles.dotInactive]} />
              <View style={[styles.dot, styles.dotInactive]} />
              <View style={[styles.dot, styles.dotInactive]} />
              <View style={[styles.dot, styles.dotActive]} />
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
};
export default ReadyCard;
