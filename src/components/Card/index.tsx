import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
  Dimensions,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles as baseStyles } from './styles';

type CardProps = {
  title: string;
  subtitle: string;
  image: ImageSourcePropType;
  showButton?: boolean;
  buttonText?: string;
  onButtonPress?: () => void;
};

const { height: windowHeight, width: windowWidth } = Dimensions.get('window');
const CARD_WIDTH = Math.min(windowWidth * 0.9, 350);

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  image,
  showButton = false,
  buttonText = 'Button',
  onButtonPress,
}) => {
  const insets = useSafeAreaInsets();
  const cardHeight = windowHeight * 0.9 - insets.top - insets.bottom;
  const imageHeight = cardHeight * 0.6;

  return (
    <View style={[baseStyles.card, { height: cardHeight, width: CARD_WIDTH }]}>
      {image && (
        <Image
          source={image}
          style={[
            baseStyles.cardImage,
            { height: imageHeight, width: CARD_WIDTH },
          ]}
          resizeMode="cover"
        />
      )}
      <View style={baseStyles.textWrapper}>
        <Text style={baseStyles.title}>{title}</Text>
        <Text style={baseStyles.subtitle}>{subtitle}</Text>
        {showButton && (
          <TouchableOpacity
            style={[baseStyles.button, { paddingVertical: 14 }]}
            onPress={onButtonPress}
          >
            <Text style={baseStyles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Card;
