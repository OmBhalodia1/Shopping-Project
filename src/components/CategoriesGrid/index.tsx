import React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { styles } from './styles';

type Category = {
  key?: string;
  title: string;
  count: number;
  images: any[];
};

type CategoriesGridProps = {
  categories: Category[];
  onCategoryPress?: (title: string) => void;
};

const ITEM_WIDTH = (Dimensions.get('window').width - 48) / 2;

const CategoryCard: React.FC<{
  category: Category;
  onPress?: () => void;
}> = ({ category, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.card, { width: ITEM_WIDTH }]}
      onPress={onPress}
    >
      <View style={styles.imagesRow}>
        {category.images.map((img, idx) => (
          <Image
            source={img}
            key={idx}
            style={styles.categoryImg}
            resizeMode="cover"
          />
        ))}
      </View>
      <View style={styles.cardFooter}>
        <Text style={styles.title}>{category.title}</Text>
        <View style={styles.countBadge}>
          <Text style={styles.countText}>{category.count}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const CategoriesGrid: React.FC<CategoriesGridProps> = ({
  categories,
  onCategoryPress,
}) => {
  return (
    <View style={styles.gridContainer}>
      {categories.map((category, idx) => (
        <CategoryCard
          key={category.key ?? idx.toString()}
          category={category}
          onPress={() => onCategoryPress?.(category.title)}
        />
      ))}
    </View>
  );
};

export default CategoriesGrid;
