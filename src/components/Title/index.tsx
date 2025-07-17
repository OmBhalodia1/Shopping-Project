import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextStyle,
  StyleProp,
  Image,
} from 'react-native';
import ShopSeeAllSection from '../ShopSeeAllSection';
import Timer from '../Timer';
import { icons } from '../../utils/icons';
import { styles } from './styles';
type TitleProps = {
  label: string;
  button?: boolean;
  timer?: boolean;
  star?: boolean;
  filter?: boolean;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
  cancel?: boolean;
  categoryButton?: boolean;
  categories?: string[];
  onCategoryChange?: (category: string) => void;
};

const Title: React.FC<TitleProps> = ({
  label,
  button = false,
  textStyle,
  timer = false,
  star = false,
  filter = false,
  cancel = false,
  onPress,
  categoryButton = false,
  categories = ['Clothes', 'Shoes'],
  onCategoryChange,
}) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleCategoryPress = (category: string) => {
    setSelectedCategory(category);
    onCategoryChange && onCategoryChange(category);
  };

  return (
    <View style={styles.container}>
      <View style={styles.star}>
        <Text style={[styles.text, textStyle]}>{label}</Text>
        {star && (
          <Image style={{ marginTop: 5, marginLeft: 7 }} source={icons.star} />
        )}
      </View>
      {categoryButton && (
        <View style={styles.categoryContainer}>
          {categories.map(cat => (
            <TouchableOpacity
              key={cat}
              onPress={() => handleCategoryPress(cat)}
              style={[
                styles.categoryButton,
                selectedCategory === cat && styles.categoryButtonActive,
              ]}
            >
              <Text
                style={[
                  styles.categoryButtonText,
                  selectedCategory === cat && styles.categoryButtonTextActive,
                ]}
              >
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      {button && <ShopSeeAllSection onPress={onPress} />}
      {timer && <Timer />}
      {filter && (
        <TouchableOpacity onPress={onPress}>
          <Image source={icons.filter} resizeMode="contain" />
        </TouchableOpacity>
      )}
      {cancel && (
        <TouchableOpacity onPress={onPress}>
          <Text style={{ fontSize: 20, marginRight: 5, fontWeight: '900' }}>
            ✕
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Title;
