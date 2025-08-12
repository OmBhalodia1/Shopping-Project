import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import { styles } from './styles';

type CardProps = {
  title: string;
  subtitle: string;
  image: ImageSourcePropType;
  showButton?: boolean;
  buttonText?: string;
  onButtonPress?: () => void;
};

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  image,
  showButton = false,
  buttonText = 'Button',
  onButtonPress,
}) => {
  return (
    <SafeAreaView>
      <View style={styles.card}>
        {image && (
          <Image source={image} style={styles.cardImage} resizeMode="cover" />
        )}
        <View style={styles.textWrapper}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
          {showButton && (
            <TouchableOpacity style={styles.button} onPress={onButtonPress}>
              <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Card;
