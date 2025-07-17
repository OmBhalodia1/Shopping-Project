import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Image,
  Text,
  View,
  ImageStyle,
  ViewStyle,
  ScrollViewProps,
  TouchableOpacity,
} from 'react-native';
import { styles } from './styles';
type ImageItem = {
  source: any;
  title?: string;
};

type ImageRowProps = {
  imageList: ImageItem[];
  scrollViewStyle?: ViewStyle | ViewStyle[];
  imageStyle?: ImageStyle | ImageStyle[];
} & ScrollViewProps;

const ImageRow: React.FC<ImageRowProps> = ({
  imageList,
  scrollViewStyle,
  imageStyle,
  ...scrollViewRestProps
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={[styles.row, scrollViewStyle]}
      {...scrollViewRestProps}
    >
      {imageList.map((item, idx) => (
        <TouchableOpacity key={idx} style={styles.itemContainer}>
          <Image source={item.source} style={[styles.avatar, imageStyle]} />
          {item.title && <Text style={styles.title}>{item.title}</Text>}
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default ImageRow;
