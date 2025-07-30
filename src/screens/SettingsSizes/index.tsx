import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import { styles } from './styles';
const SIZES = [
  { key: 'us', label: 'US' },
  { key: 'eu', label: 'EU' },
  { key: 'uk', label: 'UK' },
];

import Title from '../../components/Title';
import { icons } from '../../utils/icons';
import Section from '../../components/Section';

const SettingsSizes = () => {
  const [selected, setSelected] = useState('us');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Section
          title={
            <>
              <Title label="Settings" textStyle={styles.title1} />
              <Title label="Sizes" textStyle={styles.title2} />
            </>
          }
          sectionContent={
            <View style={{ marginTop: 16 }}>
              {SIZES.map((item, idx) => {
                const isActive = selected === item.key;
                return (
                  <TouchableOpacity
                    key={item.key}
                    style={[
                      styles.option,
                      isActive && styles.optionActive,
                      idx !== 0 && { marginTop: 12 },
                    ]}
                    onPress={() => setSelected(item.key)}
                    activeOpacity={0.8}
                  >
                    <Text
                      style={[
                        styles.optionText,
                        isActive && { fontWeight: '500' },
                      ]}
                    >
                      {item.label}
                    </Text>
                    <View style={[styles.radioOuter]}>
                      {isActive ? (
                        <Image
                          source={icons.check}
                          style={styles.checkIcon}
                          resizeMode="contain"
                        />
                      ) : null}
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default SettingsSizes;
