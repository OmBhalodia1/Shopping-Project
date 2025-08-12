import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import { styles, ITEM_WIDTH } from './styles';

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
    <FlatList
      scrollEnabled={false}
      data={categories}
      keyExtractor={(item, index) => item.key ?? index.toString()}
      numColumns={2}
      columnWrapperStyle={styles.columnWrapper}
      contentContainerStyle={styles.gridContainer}
      renderItem={({ item }) => (
        <CategoryCard
          category={item}
          onPress={() => onCategoryPress?.(item.title)}
        />
      )}
    />
  );
};

export default CategoriesGrid;
