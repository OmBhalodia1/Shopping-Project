import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import VariationRow from '../VariationRow';
import { styles } from './styles';

type VariationSectionProps = {
  data: any;
};

const VariationSection: React.FC<VariationSectionProps> = ({ data }) => {
  return (
    <>
      <VariationRow title="Variations" button1 button2 />
      <FlatList
        horizontal
        data={data}
        keyExtractor={(_, idx) => idx.toString()}
        showsHorizontalScrollIndicator={false}
        style={{ marginVertical: 10 }}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={[styles.variationImageWrap]}>
            <Image source={item} style={[styles.variationImage]} />
          </TouchableOpacity>
        )}
      />
    </>
  );
};

export default VariationSection;
