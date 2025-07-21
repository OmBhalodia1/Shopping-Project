import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import Title from '../../components/Title';
import Section from '../../components/Section';
import ImageRow from '../../components/ImageRow';
import { images } from '../../utils/images';
import SizePicker from '../../components/SizePicker';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/RootStackParamList';
import ColorPicker from '../../components/ColorPicker';
import Button from '../../components/Button';
import { styles } from './styles';
import { imageList1 } from './data';
import { imageList2 } from './data';
import TitleCancel from '../../components/TitleCancel';
import TitleCategoryButton from '../../components/TitleCategoryButton';

type NavigationProp = StackNavigationProp<
  RootStackParamList,
  'BottomTabNavigator'
>;

const ShopFilter: React.FC<{ navigation: NavigationProp }> = ({
  navigation,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Section
            title={
              <Title
                label="Filter"
                textStyle={{ fontSize: 25 }}
                rightElement={
                  <TitleCancel onPress={() => navigation.goBack()} />
                }
              />
            }
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
              <Title label="Size" rightElement={<TitleCategoryButton />} />
            }
            sectionContent={<SizePicker />}
          />
          <Section
            title={<Title label="Colors" />}
            sectionContent={<ColorPicker />}
          />
        </ScrollView>

        <View style={styles.buttonContainer}>
          <Button
            title="Clear"
            mode="outline"
            style={{ height: 50, width: 91 }}
          />
          <Button title="Apply" style={{ height: 50, width: 240 }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ShopFilter;
