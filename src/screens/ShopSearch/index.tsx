import {
  StyleSheet,
  View,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import React, { useState } from 'react';
import HeaderShop from '../../components/HeaderShop';
import Section from '../../components/Section';
import Title from '../../components/Title';
import NewItemsList from '../../components/NewItemsList';
import SearchList from '../../components/SearchList';
import { styles } from './styles';
import { DEFAULT_HISTORY } from './type';
import { DiscoverProducts } from './type';
import { RECOMMENDATIONS } from './type';

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
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, padding: 18 }}>
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
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default ShopSearch;
