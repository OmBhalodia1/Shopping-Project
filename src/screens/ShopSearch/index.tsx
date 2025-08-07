import {
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import HeaderShop from '../../components/HeaderShop';
import Section from '../../components/Section';
import Title from '../../components/Title';
import NewItemsList from '../../components/NewItemsList';
import SearchList from '../../components/SearchList';
import { styles } from './styles';
import { DEFAULT_HISTORY } from './data';
import { DiscoverProducts } from './data';
import { RECOMMENDATIONS } from './data';
const ShopSearch = () => {
  const [history, setHistory] = useState(DEFAULT_HISTORY);
  const [search, setSearch] = useState('');

  const handleSearch = (text: string) => {
    setSearch(text);
    if (text && !history.includes(text)) {
      setHistory([text, ...history]);
    }
  };

  const handleClearHistory = () => setHistory([]);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={{ flex: 1, paddingHorizontal: 18 }}>
        <HeaderShop
          title="Search"
          searchText={search}
          onSubmit={handleSearch}
        />
        <Section
          sectionContent={
            <SearchList
              mode="history"
              items={history}
              onClear={handleClearHistory}
            />
          }
        />
        <Section
          sectionContent={
            <SearchList mode="recommendation" items={RECOMMENDATIONS} />
          }
        />

        <Section
          title={<Title label="Discover" />}
          sectionContent={<NewItemsList products={DiscoverProducts} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default ShopSearch;
