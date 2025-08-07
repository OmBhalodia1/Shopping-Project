import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
type SortOption =
  | 'Popular'
  | 'Newest'
  | 'Price High to Low'
  | 'Price Low to High';

type PriceComponentProps = {
  minPrice?: number;
  maxPrice?: number;
  selectedSort?: SortOption;
  onSortChange?: (sort: SortOption) => void;
};

const PriceComponent: React.FC<PriceComponentProps> = ({
  minPrice = 10,
  maxPrice = 150,
  selectedSort = 'Popular',
  onSortChange,
}) => {
  const [activeSort, setActiveSort] = useState<SortOption>(selectedSort);

  const handleSortPress = (option: SortOption) => {
    setActiveSort(option);
    onSortChange?.(option);
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.title}>Price</Text>
        <View style={styles.priceRangeRow}>
          <Text style={styles.priceText}>${minPrice}</Text>
          <Text style={styles.priceText}>-</Text>
          <Text style={styles.priceText}>${maxPrice}</Text>
        </View>
      </View>

      <View style={styles.sliderRow}>
        <View style={styles.sliderKnob} />
        <View style={styles.sliderLine} />
        <View style={styles.sliderKnob} />
      </View>

      <View style={styles.sortRow}>
        {renderSortButton('Popular', activeSort, handleSortPress)}
        {renderSortButton('Newest', activeSort, handleSortPress)}
      </View>
      <View style={styles.sortRow}>
        {renderSortButton('Price High to Low', activeSort, handleSortPress)}
        {renderSortButton('Price Low to High', activeSort, handleSortPress)}
      </View>
    </View>
  );
};

const renderSortButton = (
  label: SortOption,
  activeSort: SortOption,
  onPress: (option: SortOption) => void,
) => {
  const isActive = activeSort === label;
  return (
    <TouchableOpacity
      style={isActive ? styles.sortButtonActive : styles.sortButton}
      onPress={() => onPress(label)}
    >
      <Text
        style={isActive ? styles.sortButtonTextActive : styles.sortButtonText}
      >
        {label}
      </Text>
      {isActive && (
        <View style={styles.checkCircle}>
          <View style={styles.tickContainer}>
            <View style={styles.tickCircle}>
              <Text style={styles.tickText}>✓</Text>
            </View>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default PriceComponent;
