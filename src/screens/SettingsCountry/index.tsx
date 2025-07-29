import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Title from '../../components/Title';
import { countries } from './data';
import { icons } from '../../utils/icons';
import { styles } from './styles';

function groupCountriesByInitial(
  countriesArr: string[],
): Record<string, string[]> {
  const grouped: Record<string, string[]> = {};
  countriesArr
    .slice()
    .sort((a, b) => a.localeCompare(b))
    .forEach(country => {
      const letter = country[0].toUpperCase();
      if (!grouped[letter]) grouped[letter] = [];
      grouped[letter].push(country);
    });
  return grouped;
}

const SettingsCountry = () => {
  const [selectedCountry, setSelectedCountry] = useState(
    countries.includes('India') ? 'India' : countries[0],
  );
  const filteredCountries = [
    selectedCountry,
    ...countries.filter(c => c !== selectedCountry),
  ];

  const groupedCountries = groupCountriesByInitial(filteredCountries);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Title label="Settings" textStyle={{ fontSize: 28 }} />
        <Title
          label="Country"
          textStyle={{ fontWeight: '300', fontSize: 20, marginBottom: 10 }}
        />
        <View style={styles.pickerBox}>
          <Text style={styles.pickerText}>{selectedCountry}</Text>
          <Image
            source={icons.check}
            style={styles.checkIcon}
            resizeMode="contain"
          />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {Object.keys(groupedCountries)
            .sort()
            .map(letter => (
              <View key={letter}>
                <View style={styles.alphaHeader}>
                  <Text style={styles.alphaHeaderText}>{letter}</Text>
                </View>
                {groupedCountries[letter].map(country => (
                  <TouchableOpacity
                    key={country}
                    style={styles.countryRow}
                    onPress={() => setSelectedCountry(country)}
                    activeOpacity={0.7}
                  >
                    <Text style={styles.countryText}>{country}</Text>
                    {selectedCountry === country && (
                      <Image
                        source={icons.check}
                        style={styles.checkIconSmall}
                      />
                    )}
                  </TouchableOpacity>
                ))}
              </View>
            ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SettingsCountry;
