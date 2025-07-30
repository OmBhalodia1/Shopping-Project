import React, { useState } from 'react';
import {
  ScrollView,
  SafeAreaView,
  NativeSyntheticEvent,
  NativeScrollEvent,
  View,
} from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { styles } from './styles';
import HeaderShop from '../../components/HeaderShop';
import ImageRow from '../../components/ImageRow';
import Section from '../../components/Section';
import Title from '../../components/Title';
import JustForYouList from '../../components/JustForYouList';
import { RootStackParamList } from '../../types/RootStackParamList';
import { AllItems } from './data';
import { imageList1 } from './data';
import { imageList2 } from './data';
import { StackNavigationProp } from '@react-navigation/stack';
import TitleFilter from '../../components/TitleFilter';

type ShopClothingRouteProp = RouteProp<RootStackParamList, 'ShopClothing'>;

type NavigationProp = StackNavigationProp<
  RootStackParamList,
  'BottomTabNavigator'
>;

const ShopClothing: React.FC<{ navigation: NavigationProp }> = ({
  navigation,
}) => {
  const route = useRoute<ShopClothingRouteProp>();

  const handleProductPress = (product: { id: string }) => {
    navigation.navigate('Product', { id: product.id });
  };

  const { category } = route.params || {};

  const [showFilter, setShowFilter] = useState(false);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    setShowFilter(event.nativeEvent.contentOffset.y > 252);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentWrapper}>
        <HeaderShop
          showFilter={showFilter}
          searchText={category}
          onPress={() => navigation.navigate('ShopFilter')}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          <Section
            sectionContent={[
              <ImageRow
                key="clothing-list-1"
                imageList={imageList1}
                scrollEnabled={false}
                scrollViewStyle={styles.scrollView}
              />,
              <ImageRow
                key="clothing-list-2"
                imageList={imageList2}
                scrollEnabled={false}
              />,
            ]}
          />
          <Section
            title={
              <Title
                label="All Items"
                rightElement={
                  <TitleFilter
                    onPress={() => navigation.navigate('ShopFilter')}
                  />
                }
              />
            }
            sectionContent={
              <JustForYouList
                products={AllItems}
                onProductPress={handleProductPress}
              />
            }
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ShopClothing;
