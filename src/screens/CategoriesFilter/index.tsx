import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { images } from '../../utils/images';
import { icons } from '../../utils/icons';
import Title from '../../components/Title';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/RootStackParamList';
import { categoryImages } from './data';
import { categories } from './data';
import { genderTabs } from './data';
import { styles } from './styles';
import RenderSubcategories from '../../components/RenderSubCategories';

type NavigationProp = StackNavigationProp<
  RootStackParamList,
  'BottomTabNavigator'
>;

const CategoriesFilter: React.FC<{ navigation: NavigationProp }> = ({
  navigation,
}) => {
  const [gender, setGender] = useState('Female');
  const [openDropdown, setOpenDropdown] = useState('Clothing');
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
          }}
        >
          <Title label="All Categories" />
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{ fontSize: 18, color: '#444' }}>X</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.tabs}>
          {genderTabs.map(tab => (
            <TouchableOpacity
              key={tab}
              style={[styles.tabBtn, gender === tab && styles.activeTabBtn]}
              onPress={() => setGender(tab)}
            >
              <Text
                style={[styles.tabText, gender === tab && styles.activeTabText]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <FlatList
          data={categories}
          keyExtractor={item => item.label}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                style={styles.categoryRow}
                onPress={() =>
                  setOpenDropdown(openDropdown === item.label ? '' : item.label)
                }
              >
                <Image source={item.image} style={styles.icon} />
                <Text style={styles.catLabel}>{item.label}</Text>
                <Image
                  style={styles.arrow}
                  source={
                    item.subcategories
                      ? openDropdown === item.label
                        ? icons.arrowUp
                        : icons.arrowDown
                      : icons.arrowDown
                  }
                />
              </TouchableOpacity>
              {openDropdown === item.label && item.subcategories && (
                <RenderSubcategories
                  subcategories={item.subcategories}
                  onPressSubcategory={sub => console.log(sub)}
                />
              )}
            </View>
          )}
          ListFooterComponent={
            <TouchableOpacity
              style={styles.categoryRow}
              onPress={() => console.log('Go to Just for You')}
            >
              <Image source={categoryImages.JustForYou} style={styles.icon} />
              <Title
                star
                label="Just For You"
                textStyle={{
                  fontSize: 17,
                  fontWeight: '700',
                  color: '#202020',
                  fontFamily: 'Raleway',
                  lineHeight: 21,
                  letterSpacing: -0.17,
                }}
              />

              <View style={styles.arrowCircle}>
                <Text style={styles.arrowText}>{'→'}</Text>
              </View>
            </TouchableOpacity>
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default CategoriesFilter;
