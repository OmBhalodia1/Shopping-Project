import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import { styles } from './styles';

const LANGUAGES = [
  { key: 'en', label: 'English' },
  { key: 'fr', label: 'Français' },
  { key: 'ru', label: 'Русский' },
  { key: 'vi', label: 'Tiếng Việt' },
];

import Title from '../../components/Title';
import { icons } from '../../utils/icons';
import Section from '../../components/Section';

const SettingsLanguage = () => {
  const [selected, setSelected] = useState('en');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Title label="Settings" textStyle={styles.title1} />
        <Section
          sectionContent={
            <>
              <Title label="Language" textStyle={styles.title2} />
              <View style={{ marginTop: 16 }}>
                {LANGUAGES.map((item, idx) => {
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

export default SettingsLanguage;
