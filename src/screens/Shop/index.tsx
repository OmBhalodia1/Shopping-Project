import React from 'react';
import { SafeAreaView, View, Text, Image, ScrollView } from 'react-native';
import { images } from '../../utils/images';
import CategoriesGrid from '../../components/CategoriesGrid';
import ImageRow from '../../components/ImageRow';
import Title from '../../components/Title';
import NewItemsList from '../../components/NewItemsList';
import FlashSaleImageGrid from '../../components/FlashSaleImageGrid';
import MostPopularItemList from '../../components/MostPopularItemList';
import JustForYouList from '../../components/JustForYouList';
import Section from '../../components/Section';
import { styles } from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/RootStackParamList';
import HeaderShop from '../../components/HeaderShop';
import { NewItemProducts } from './data';
import { TopProducts } from './data';
import { JustForYouProducts } from './data';
import { categories } from './data';
import Pagination from '../../components/Pagination';
import ShopSeeAllSection from '../../components/ShopSeeAllSection';
import TitleTimer from '../../components/TitleTimer';

type NavigationProp = StackNavigationProp<
  RootStackParamList,
  'BottomTabNavigator'
>;

const ShopScreen: React.FC<{ navigation: NavigationProp }> = ({
  navigation,
}) => {
  const handleCategoryPress = (categoryName: string) => {
    navigation.navigate('ShopClothing', { category: categoryName });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: 20 }}
        stickyHeaderIndices={[0]}
      >
        <HeaderShop onSubmit={() => navigation.navigate('ShopSearch')} />

        <Section
          sectionContent={
            <>
              <View style={styles.bannerWrapper}>
                <Image
                  source={images.BigSale1}
                  style={styles.bannerImage}
                  resizeMode="contain"
                />
                <Image
                  source={images.BigSale2}
                  style={styles.bannerImage}
                  resizeMode="contain"
                />

                <View style={styles.bannerContent}>
                  <Text style={styles.bannerTitle}>Big Sale</Text>
                  <Text style={styles.bannerSubtitle}>Up to 50%</Text>
                  <Text style={styles.bannerDesc}>Happening{'\n'}now</Text>
                </View>
              </View>

              <Pagination />
            </>
          }
        />
        <Section
          title={
            <Title
              label="Categories"
              rightElement={
                <ShopSeeAllSection
                  onPress={() => navigation.navigate('CategoriesFilter')}
                />
              }
            />
          }
          sectionContent={
            <CategoriesGrid
              categories={categories}
              onCategoryPress={handleCategoryPress}
            />
          }
        />

        <Section
          title={<Title label="Top Products" />}
          sectionContent={<ImageRow imageList={TopProducts} />}
        />

        <Section
          title={
            <Title label="New Items" rightElement={<ShopSeeAllSection />} />
          }
          sectionContent={<NewItemsList products={NewItemProducts} />}
        />

        <Section
          title={<Title label="Flash Sale" rightElement={<TitleTimer />} />}
          sectionContent={<FlashSaleImageGrid />}
        />

        <Section
          title={
            <Title label="Most Popular" rightElement={<ShopSeeAllSection />} />
          }
          sectionContent={<MostPopularItemList />}
        />

        <Section
          title={<Title label="Just For You" star />}
          sectionContent={<JustForYouList products={JustForYouProducts} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShopScreen;
