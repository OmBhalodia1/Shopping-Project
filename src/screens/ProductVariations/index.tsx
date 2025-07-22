import React, { useRef } from 'react';
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { images } from '../../utils/images';
import Title from '../../components/Title';
import VariationRow from '../../components/VariationRow';
import VariationSection from '../../components/VariationSection';
import SizePicker2 from '../../components/SizePicker2';
import Section from '../../components/Section';
import QuantitySelector from '../../components/QuantitySelector';
import FooterButton from '../../components/FooterButton';
import { styles } from './styles';
import BottomSheet from '../../components/BottomSheet';
import { RootStackParamList } from '../../types/RootStackParamList';
import { NavigationProp } from '@react-navigation/native';
type ProductVariationsProps = Readonly<{
  isOpen: boolean;
  onClose: () => void;
}>;

const ProductVariations: React.FC<ProductVariationsProps> = ({
  isOpen,
  onClose,
}) => {
  const variations = [
    images.Varient1,
    images.Varient2,
    images.Varient3,
    images.Varient4,
  ];

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <ScrollView contentContainerStyle={styles.card}>
        <View style={styles.row}>
          <Image
            source={images.ProductVariationsGirl}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.details}>
            <Title label="$17,00" />

            <View style={styles.optionsRow}>
              <VariationRow
                button1
                button2
                button1Style={styles.optionButton}
                button2Style={styles.optionButton}
                arrowCircle={false}
              />
            </View>
          </View>
        </View>
        <View>
          <VariationSection
            data={variations}
            arrowCircle={false}
            button1={false}
            button2={false}
            title="Color Options"
          />
          <Section
            title={<Title label="Size" />}
            sectionContent={<SizePicker2 disabledSizes={['XXL', 'XXXL']} />}
          />

          <QuantitySelector />
        </View>
      </ScrollView>
      <FooterButton />
    </BottomSheet>
  );
};

export default ProductVariations;
