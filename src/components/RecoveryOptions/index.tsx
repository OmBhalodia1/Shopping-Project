import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text as ReactText,
  TouchableOpacityProps,
} from 'react-native';
import { styles } from './styles';

type RecoveryOptionType = 'sms' | 'email';

type Props = {
  label: RecoveryOptionType;
  selected: boolean;
  onSelect: (label: RecoveryOptionType) => void;
} & TouchableOpacityProps;

const RecoveryOptions: React.FC<Props> = ({ label, selected, onSelect }) => {
  return (
    <TouchableOpacity
      style={[
        styles.option,
        selected ? styles.selectedOption : styles.unselectedOption,
      ]}
      onPress={() => onSelect(label)}
      activeOpacity={0.8}
    >
      <ReactText
        style={[
          styles.optionText,
          selected ? styles.selectedText : styles.unselectedText,
        ]}
      >
        {label === 'sms' ? 'SMS' : 'Email'}
      </ReactText>

      <View
        style={[
          styles.radio,
          selected ? styles.radioSelected : styles.radioUnselected,
        ]}
      >
        {selected && <ReactText style={styles.radioTick}>✓</ReactText>}
      </View>
    </TouchableOpacity>
  );
};

export default RecoveryOptions;
