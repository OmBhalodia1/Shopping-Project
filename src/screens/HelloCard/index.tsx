import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  Platform,
  useWindowDimensions,
  StyleSheet,
} from 'react-native';
import { images } from '../../utils/images';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/RootStackParamList';
import Card from '../../components/Card';
import Section from '../../components/Section';
import { styles } from './styles';
type Props = NativeStackScreenProps<RootStackParamList, 'HelloCard'>;

const HelloCard: React.FC<Props> = ({ navigation }) => {
  const { width, height } = useWindowDimensions();

  const CARD_WIDTH = width * 0.85;
  const CARD_RADIUS = 28;
  const CARD_MARGIN_TOP = height * 0.1;

  const DOT_SIZE = Math.max(13, width * 0.05);
  const DOT_GAP = width * 0.025;
  const DOTS_MARGIN_TOP = CARD_MARGIN_TOP * 0.3;

  return (
    <View style={[styles.flex, { backgroundColor: '#F9FAFF' }]}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Image
        source={images.HelloBack}
        style={{
          position: 'absolute',
          top: 0,
          width,
          height: height * 0.45,
        }}
        resizeMode="cover"
      />
      <View
        style={[
          styles.shadowWrap,
          {
            width: CARD_WIDTH,
            borderRadius: CARD_RADIUS,
            marginTop: CARD_MARGIN_TOP,
            alignSelf: 'center',
            shadowColor: '#0F1133',
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 0.07,
            shadowRadius: 25,
            elevation: 3,
          },
        ]}
      >
        <View
          style={{
            backgroundColor: '#fff',
            borderRadius: CARD_RADIUS,
            overflow: 'hidden',
          }}
        >
          <Card
            title="Hello"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non consectetur turpis. Morbi eu eleifend lacus."
            image={images.Hello}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: DOTS_MARGIN_TOP,
          marginBottom: height * 0.03,
        }}
      >
        <View
          style={[
            styles.dot,
            {
              width: DOT_SIZE,
              height: DOT_SIZE,
              marginHorizontal: DOT_GAP,
              backgroundColor: '#E1E9FF',
            },
          ]}
        />
        <View
          style={[
            styles.dot,
            {
              width: DOT_SIZE,
              height: DOT_SIZE,
              marginHorizontal: DOT_GAP,
              backgroundColor: '#2A67FD',
            },
          ]}
        />
        <View
          style={[
            styles.dot,
            {
              width: DOT_SIZE,
              height: DOT_SIZE,
              marginHorizontal: DOT_GAP,
              backgroundColor: '#E1E9FF',
            },
          ]}
        />
        <TouchableOpacity
          style={[
            styles.dot,
            {
              width: DOT_SIZE,
              height: DOT_SIZE,
              marginHorizontal: DOT_GAP,
              backgroundColor: '#E1E9FF',
            },
          ]}
          onPress={() => navigation.navigate('ReadyCard')}
        />
      </View>
    </View>
  );
};

export default HelloCard;
