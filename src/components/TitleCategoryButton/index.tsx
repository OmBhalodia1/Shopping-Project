import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from '../Title/styles';
import { useState } from 'react';

type TitleCategoryButtonProps = {
  categories?: string[];
  onCategoryChange?: (category: string) => void;
};
const TitleCategoryButton: React.FC<TitleCategoryButtonProps> = ({
  categories = ['Clothes', 'Shoes'],
  onCategoryChange,
}) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleCategoryPress = (category: string) => {
    setSelectedCategory(category);
    onCategoryChange && onCategoryChange(category);
  };
  return (
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
  );
};

export default TitleCategoryButton;
