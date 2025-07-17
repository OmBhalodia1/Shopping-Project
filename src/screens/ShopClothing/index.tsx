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
import { images } from '../../utils/images';
import HeaderShop from '../../components/HeaderShop';
import ImageRow from '../../components/ImageRow';
import Section from '../../components/Section';
import Title from '../../components/Title';
import JustForYouList from '../../components/JustForYouList';
import { RootStackParamList } from '../../types/RootStackParamList';
import { AllItems } from './type';
import { imageList1 } from './type';
import { imageList2 } from './type';

type ShopClothingRouteProp = RouteProp<RootStackParamList, 'ShopClothing'>;

const ShopClothing = () => {
  const route = useRoute<ShopClothingRouteProp>();
  const { category } = route.params || {};

  const [showFilter, setShowFilter] = useState(false);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    setShowFilter(event.nativeEvent.contentOffset.y > 252);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentWrapper}>
        <HeaderShop showFilter={showFilter} searchText={category} />

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
            title={<Title label="All Items" filter />}
            sectionContent={<JustForYouList products={AllItems} />}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ShopClothing;
