import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { icons } from '../../utils/icons';
import { styles } from './styles';

type HeaderShopProps = {
  title?: string;
  showFilter?: boolean;
  searchText?: string;
  onSubmit?: (text: string) => void;
  onPress?: () => void;
};

const HeaderShop: React.FC<HeaderShopProps> = ({
  showFilter = false,
  title = 'Shop',
  searchText = '',
  onPress,
  onSubmit,
}) => {
  const [input, setInput] = useState(searchText);

  const handleClear = () => {
    setInput('');
  };

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(input);
    }
  };

  return (
    <View style={styles.headerRow}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search"
          style={styles.searchInput}
          placeholderTextColor="#C7C7C7"
          value={input}
          onChangeText={setInput}
          onSubmitEditing={handleSubmit}
        />

        {input.length > 0 && (
          <TouchableOpacity onPress={handleClear} style={styles.clearButton}>
            <Text style={styles.customText}>x</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity>
          <Image
            source={icons.camera}
            style={styles.icon}
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
  );
};

export default HeaderShop;
