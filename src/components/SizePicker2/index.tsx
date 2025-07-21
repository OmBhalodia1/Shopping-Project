import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import { styles } from './styles';

const SIZES = ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'] as const;
type SizeType = (typeof SIZES)[number];

type SizePicker2Props = {
  sizes?: readonly SizeType[];
  disabledSizes?: readonly SizeType[];
  onChange?: (size: SizeType) => void;
  initial?: SizeType;
};

const SizePicker2: React.FC<SizePicker2Props> = ({
  sizes = SIZES,
  disabledSizes = [],
  onChange = () => {},
  initial = 'M',
}) => {
  const [selectedSize, setSelectedSize] = useState<SizeType>(initial);

  const handlePress = (size: SizeType) => (e: GestureResponderEvent) => {
    if (!disabledSizes.includes(size)) {
      setSelectedSize(size);
      onChange(size);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.row}>
        {sizes.map(size => {
          const isSelected = selectedSize === size;
          const isDisabled = disabledSizes.includes(size);

          return (
            <TouchableOpacity
              testID={`size-btn-${size}`}
              key={size}
              disabled={isDisabled}
              style={[
                styles.button,
                isSelected && !isDisabled && styles.active,
                isDisabled && styles.disabled,
              ]}
              onPress={handlePress(size)}
              activeOpacity={isDisabled ? 1 : 0.7}
            >
              <Text
                style={[
                  styles.buttonText,
                  isSelected && !isDisabled && styles.activeText,
                  isDisabled && styles.disabledText,
                ]}
              >
                {size}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default SizePicker2;
