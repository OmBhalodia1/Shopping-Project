import React from 'react';
import {
  ScrollView,
  Image,
  Text,
  View,
  TouchableOpacity,
  ImageStyle,
  ViewStyle,
  ScrollViewProps,
  StyleSheet,
} from 'react-native';
import { styles } from './styles';

type ImageItem = {
  source: any;
  title?: string;
  isTicked?: boolean;
};

type ImageRowProps = {
  imageList: ImageItem[];
  scrollViewStyle?: ViewStyle | ViewStyle[];
  imageStyle?: ImageStyle | ImageStyle[];
  onItemPress?: (index: number) => void;
} & ScrollViewProps;

const ImageRow: React.FC<ImageRowProps> = ({
  imageList,
  scrollViewStyle,
  imageStyle,
  onItemPress,
  ...scrollViewRestProps
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={[styles.row, scrollViewStyle]}
      contentContainerStyle={styles.contentContainer}
      {...scrollViewRestProps}
    >
      {imageList.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.itemContainer}
          onPress={() => onItemPress?.(index)}
        >
          <View style={{ position: 'relative' }}>
            <Image source={item.source} style={[styles.avatar, imageStyle]} />
            {item.isTicked && (
              <View style={styles.tickContainer}>
                <View style={styles.tickCircle}>
                  <Text style={styles.tickText}>✓</Text>
                </View>
              </View>
            )}
          </View>
          {item.title && <Text style={styles.title}>{item.title}</Text>}
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default ImageRow;
