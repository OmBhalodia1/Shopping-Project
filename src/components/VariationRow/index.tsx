import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { styles } from './styles';

type VariationRowProps = {
  title?: string;
  button1?: boolean;
  button2?: boolean;
  buttonText1?: string;
  buttonText2?: string;
  button1Style?: StyleProp<ViewStyle>;
  button2Style?: StyleProp<ViewStyle>;
  arrowCircle?: boolean;
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
}) => {
  return (
    <View style={styles.variationRow}>
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

      {arrowCircle ? (
        <TouchableOpacity style={styles.variationArrow}>
          <Text style={styles.variationArrowIcon}>→</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default VariationRow;
