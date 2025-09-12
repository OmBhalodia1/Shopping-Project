import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { icons } from '../../utils/icons';
import { styles } from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type HeaderShopProps = {
  title?: string;
  showFilter?: boolean;
  searchText?: string;
  onSubmit?: (text: string) => void;
  onPress?: () => void;
  isBlue?: boolean;
};

const HeaderShop: React.FC<HeaderShopProps> = ({
  showFilter = false,
  title = 'Shop',
  searchText = '',
  onPress,
  onSubmit,
  isBlue = false,
}) => {
  const [input, setInput] = useState(searchText);
  const insets = useSafeAreaInsets();

  const handleClear = () => {
    setInput('');
    if (onSubmit) onSubmit('');
  };

  const handleSubmit = () => {
    if (onSubmit) onSubmit(input);
  };

  return (
    <View
      style={{
        backgroundColor: '#fff',
        overflow: 'visible',
        zIndex: 10,
        paddingHorizontal: 16,
        paddingBottom: 8,
        paddingTop: insets.top,
      }}
    >
      <View style={styles.headerRow}>
        <Text style={styles.title}>{title}</Text>

        <View
          style={[
            styles.searchContainer,
            {
              flexDirection: 'row',
              flex: 1,
            },
            isBlue
              ? { backgroundColor: '#E8EDFF' }
              : { backgroundColor: '#f2f2f2' },
          ]}
        >
          <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
            <TextInput
              style={[
                { flex: 1 },
                isBlue ? { color: '#0042E0' } : { color: '#000' },
              ]}
              placeholder="Search"
              placeholderTextColor={isBlue ? '#0042E0' : '#C7C7C7'}
              value={input}
              onChangeText={setInput}
              onSubmitEditing={handleSubmit}
            />

            {input.length > 0 && (
              <TouchableOpacity
                onPress={handleClear}
                style={styles.clearButton}
              >
                <Text
                  style={[
                    styles.clearText,
                    isBlue ? { color: '#0042E0' } : { color: '#000' },
                  ]}
                >
                  ×
                </Text>
              </TouchableOpacity>
            )}
          </View>

          <TouchableOpacity style={{ alignSelf: 'center' }}>
            <Image
              source={icons.camera}
              style={[styles.icon, { tintColor: '#0042E0' }]}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        {showFilter && (
          <TouchableOpacity style={{ marginLeft: 4 }} onPress={onPress}>
            <Image source={icons.filter} resizeMode="contain" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default HeaderShop;
