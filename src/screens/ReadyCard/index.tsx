import React from 'react';
import { View, Image, Dimensions, Platform, StatusBar } from 'react-native';
import { images } from '../../utils/images';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/RootStackParamList';
import Card from '../../components/Card';
import Section from '../../components/Section';
import { styles } from './styles';
type Props = NativeStackScreenProps<RootStackParamList, 'ReadyCard'>;

const { width } = Dimensions.get('window');

const ReadyCard: React.FC<Props> = ({ navigation }) => {
  return (
    <View
      style={[
        styles.container,
        Platform.OS === 'android' && { paddingTop: StatusBar.currentHeight },
      ]}
    >
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Image
        source={images.ReadyBack}
        style={styles.backgroundImage}
        resizeMode="cover"
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
    </View>
  );
};

export default ReadyCard;
