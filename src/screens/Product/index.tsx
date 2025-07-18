import React, { useState } from 'react';
import {
  View,
  Text as ReactText,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { RouteProp, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types/RootStackParamList';
import { images } from '../../utils/images';
import { AllItems } from '../ShopClothing/data';
import Pagination from '../../components/Pagination';
import { icons } from '../../utils/icons';
import Text from '../../components/Text';
import FooterButton from '../../components/FooterButton';
import VariationSection from '../../components/VariationSection';
import Title from '../../components/Title';
import VariationRow from '../../components/VariationRow';
import Section from '../../components/Section';

type ShopClothingRouteProp = RouteProp<RootStackParamList, 'Product'>;
type Props = {
  route: ShopClothingRouteProp;
  navigation: NavigationProp<RootStackParamList, 'Product'>;
};

export const Product: React.FC<Props> = ({ route }) => {
  const { id } = route.params;
  const product = AllItems.find(item => item.id === id);
  const variations = [images.Varient1, images.Varient2, images.Varient3];

  const mainImageSource = product?.fullImage || product?.image;

  if (!product) {
    return (
      <View style={styles.container}>
        <ReactText style={{ color: 'red', fontSize: 20, margin: 20 }}>
          Product not found.
        </ReactText>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageSection}>
          <Image
            source={mainImageSource}
            style={[styles.productImage, { width: '100%' }]}
          />
          <View style={styles.carouselDots}>
            <Pagination />
          </View>
        </View>

        <View style={styles.detailsSection}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: 10,
            }}
          >
            <Text mode="title" label={product.price} style={{ fontSize: 26 }} />
            <Image source={icons.share} />
          </View>
          <ReactText style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu
            mauris, scelerisque eu mauris id, pretium pulvinar sapien.
          </ReactText>

          <VariationSection data={variations} />

          <Section
            title={
              <Title label="Specifications" textStyle={{ fontSize: 26 }} />
            }
            sectionContent={
              <Section
                title={<Title label="Material" />}
                sectionContent={
                  <View style={{ marginLeft: -20 }}>
                    <VariationRow
                      button1
                      buttonText1="Cotton 95%"
                      button2
                      buttonText2="Nylon 5%"
                      arrowCircle={false}
                      button1Style={{ backgroundColor: '#FFEBEB' }}
                      button2Style={{ backgroundColor: '#FFEBEB' }}
                    />
                  </View>
                }
              />
            }
          />
        </View>
      </ScrollView>
      <FooterButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  imageSection: {
    width: '100%',
    height: 460,
    backgroundColor: '#F9F9F9',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
  },
  productImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    height: '100%',
  },
  carouselDots: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsSection: {
    paddingBottom: 32,
    paddingHorizontal: 20,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    backgroundColor: '#FFFFFF',
    position: 'relative',
  },
  price: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#202020',
    marginBottom: 7,
    marginTop: 9,
    letterSpacing: 0.5,
  },
  description: {
    fontSize: 15,
    color: '#292929',
    marginVertical: 12,
    lineHeight: 21,
  },
});
