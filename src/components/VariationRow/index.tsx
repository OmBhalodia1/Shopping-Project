import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  Image,
} from 'react-native';
import React from 'react';
import { styles } from './styles';
import { icons } from '../../utils/icons';

type VariationRowProps = {
  title?: string;
  button1?: boolean;
  button2?: boolean;
  buttonText1?: string;
  buttonText2?: string;
  button1Style?: StyleProp<ViewStyle>;
  button2Style?: StyleProp<ViewStyle>;
  arrowCircle?: boolean;
  onPressArrow?: () => void;
};

const VariationRow: React.FC<VariationRowProps> = ({
  button1 = false,
  button2 = false,
  buttonText1 = 'Pink',
  buttonText2 = 'M',
  button1Style,
  button2Style,
  title,
  arrowCircle = true,
  onPressArrow,
}) => {
  return (
    <View style={styles.variationRow}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.variationLabel}>{title}</Text>

        {button1 ? (
          <View style={[styles.variationValueBox, button1Style]}>
            <Text style={styles.variationValue}>{buttonText1}</Text>
          </View>
        ) : null}

        {button2 ? (
          <View style={[styles.variationValueBox, button2Style]}>
            <Text style={styles.variationValue}>{buttonText2}</Text>
          </View>
        ) : null}
      </View>

      <View>
        {arrowCircle ? (
          <TouchableOpacity
            style={{ height: 36, width: 36 }}
            onPress={onPressArrow}
          >
            <Image source={icons.ArrowButton} resizeMode="contain" />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default VariationRow;
