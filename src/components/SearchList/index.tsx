import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ViewStyle,
} from 'react-native';
import { icons } from '../../utils/icons';
import { styles } from './styles';

type SearchListProps = {
  mode: 'history' | 'recommendation';
  items: string[];
  onClear?: () => void;
};

const SearchList: React.FC<SearchListProps> = ({ mode, items, onClear }) => {
  if (items.length === 0 && mode === 'history') return null;

  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <Text style={styles.title}>
          {mode === 'history' ? 'Search history' : 'Recommendations'}
        </Text>
        {mode === 'history' && (
          <TouchableOpacity onPress={onClear}>
            <Image source={icons.delete} style={styles.deleteIcon} />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.chipContainer}>
        {items.map((item, idx) => (
          <TouchableOpacity key={item + idx} style={styles.chip}>
            <Text style={styles.chipText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default SearchList;
