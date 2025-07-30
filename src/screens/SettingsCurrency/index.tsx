import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import { styles } from './styles';

const CURRENCY = [
  { key: 'usd', label: '$ USD' },
  { key: 'euro', label: '€ EURO' },
  { key: 'vnd', label: '₫ VND' },
  { key: 'rub', label: '₽ RUB' },
];

import Title from '../../components/Title';
import { icons } from '../../utils/icons';
import Section from '../../components/Section';

const SettingsCurrency = () => {
  const [selected, setSelected] = useState('usd');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Title label="Settings" textStyle={styles.title1} />
        <Section
          sectionContent={
            <>
              <Title label="Currency" textStyle={styles.title2} />

              <View style={{ marginTop: 16 }}>
                {CURRENCY.map((item, idx) => {
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
            </>
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default SettingsCurrency;
