import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
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
import PriceComponent from '../../components/PriceComponent';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type NavigationProp = StackNavigationProp<
  RootStackParamList,
  'BottomTabNavigator'
>;

const ShopFilter: React.FC<{ navigation: NavigationProp }> = ({
  navigation,
}) => {
  const insets = useSafeAreaInsets();

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
          <PriceComponent />
        </ScrollView>

        <View
          style={[styles.buttonContainer, { paddingBottom: insets.bottom }]}
        >
          <Button
            title="Clear"
            mode="outline"
            style={{ height: 50, flex: 1 }}
          />
          <Button title="Apply" style={{ height: 50, flex: 2 }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ShopFilter;
