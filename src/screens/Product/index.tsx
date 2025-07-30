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
import DeliveryOptions from '../../components/DeliveryOptions';
import Ratings from '../../components/Ratings';
import ReviewsComponent from '../../components/ReviewsComponent';
import Button from '../../components/Button';
import ShopSeeAllSection from '../../components/ShopSeeAllSection';
import MostPopularItemList from '../../components/MostPopularItemList';
import JustForYouList from '../../components/JustForYouList';
import { JustForYouProducts } from '../Shop/data';
import { styles } from './styles';
import ProductVariations from '../ProductVariations';

type ShopClothingRouteProp = RouteProp<RootStackParamList, 'Product'>;
type Props = {
  route: ShopClothingRouteProp;
  navigation: NavigationProp<RootStackParamList, 'Product'>;
};

export const Product: React.FC<Props> = ({ route, navigation }) => {
  const { id } = route.params;
  const [isProductVariantOpen, setIsProductVariantOpen] = useState(false);
  const product = AllItems.find(item => item.id === id);
  const variations = [
    images.Varient1,
    images.Varient2,
    images.Varient3,
    images.Varient4,
  ];

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
        <Section
          sectionContent={
            <View style={styles.imageSection}>
              <Image
                source={mainImageSource}
                style={[styles.productImage, { width: '100%' }]}
              />
              <View style={styles.carouselDots}>
                <Pagination />
              </View>
            </View>
          }
        />

        <View style={styles.detailsSection}>
          <Section
            sectionContent={
              <>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingTop: 10,
                  }}
                >
                  <Text
                    mode="title"
                    label={product.price}
                    style={{ fontSize: 26 }}
                  />
                  <Image source={icons.share} />
                </View>
                <ReactText style={styles.description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  arcu mauris, scelerisque eu mauris id, pretium pulvinar
                  sapien.
                </ReactText>
              </>
            }
          />

          <Section
            sectionContent={
              <VariationSection
                data={variations}
                onPressArrow={() => setIsProductVariantOpen(true)}
              />
            }
          />

          <Section
            title={
              <Title label="Specifications" textStyle={{ fontSize: 26 }} />
            }
            sectionContent={[
              <Section
                key={'material'}
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
              />,
              <Section
                key={'origin'}
                title={<Title label="Origin" />}
                sectionContent={
                  <VariationRow
                    button1
                    buttonText1="EU"
                    arrowCircle={false}
                    button1Style={{
                      backgroundColor: '#E5EBFC',
                      left: -17,
                    }}
                  />
                }
              />,
              <Section
                key={'delivery'}
                title={<Title label="Delivery" />}
                sectionContent={[
                  <DeliveryOptions
                    key={'1'}
                    deliveryType="Standard"
                    days="5-7"
                    price="$3,00"
                  />,
                  <DeliveryOptions
                    key={'2'}
                    deliveryType="Express"
                    days="1-2"
                    price="$12,00"
                  />,
                ]}
              />,
              <Section
                key={'ratings'}
                title={<Title label="Ratings & Reviews" />}
                sectionContent={[
                  <Ratings key={'r1'} />,
                  <ReviewsComponent starCount={4} key={'r2'} />,
                  <View key={'r3'} style={{ marginTop: 10 }}>
                    <Button
                      title="View All Reviews"
                      onPress={() => navigation.navigate('Reviews')}
                    />
                  </View>,
                ]}
              />,
              <Section
                key={'most popular'}
                title={
                  <Title
                    label="Most Popular"
                    rightElement={<ShopSeeAllSection />}
                  />
                }
                sectionContent={<MostPopularItemList />}
              />,
              <Section
                key={'you might like '}
                title={<Title label="You Might Like" />}
                sectionContent={
                  <JustForYouList products={JustForYouProducts} />
                }
              />,
            ]}
          />
        </View>
      </ScrollView>
      <FooterButton />
      <ProductVariations
        isOpen={isProductVariantOpen}
        onClose={() => setIsProductVariantOpen(false)}
      />
    </View>
  );
};
