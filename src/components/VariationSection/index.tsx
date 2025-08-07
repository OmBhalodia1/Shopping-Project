import { TouchableOpacity, FlatList, Image } from 'react-native';
import React from 'react';
import VariationRow from '../VariationRow';
import { styles } from './styles';

type VariationSectionProps = {
  data: any;
  onPressArrow?: () => void;
  button1?: boolean;
  button2?: boolean;
  arrowCircle?: boolean;
  title?: string;
};

const VariationSection: React.FC<VariationSectionProps> = ({
  data,
  onPressArrow,
  button1 = true,
  button2 = true,
  arrowCircle = true,
  title = 'Variations',
}) => {
  return (
    <>
      <VariationRow
        title={title}
        button1={button1}
        button2={button2}
        onPressArrow={onPressArrow}
        arrowCircle={arrowCircle}
      />
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
