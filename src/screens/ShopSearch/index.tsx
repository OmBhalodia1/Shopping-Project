import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import HeaderShop from '../../components/HeaderShop';
import Section from '../../components/Section';
import Title from '../../components/Title';
import NewItemsList from '../../components/NewItemsList';
import { images } from '../../utils/images';
export const NewItemProducts = [
  {
    id: '1',
    image: images.Discover1,
    name: 'Lorem ipsum dolor sit amet consectetur.',
    price: '$17,00',
  },
  {
    id: '2',
    image: images.Discover2,
    name: 'Lorem ipsum dolor sit amet consectetur.',
    price: '$17,00',
  },
  {
    id: '3',
    image: images.Discover1,
    name: 'Lorem ipsum dolor sit amet consectetur.',
    price: '$17,00',
  },
];
const ShopSearch = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ padding: 18 }}>
        <HeaderShop title="Search" />

        <Section
          title={<Title label="Discover" />}
          sectionContent={<NewItemsList products={NewItemProducts} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default ShopSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
