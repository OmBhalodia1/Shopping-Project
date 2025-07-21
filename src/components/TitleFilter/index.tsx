import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { icons } from '../../utils/icons';

type TitleFilterProps = {
  onPress?: () => void;
};
const TitleFilter: React.FC<TitleFilterProps> = ({ onPress }) => {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <Image source={icons.filter} resizeMode="contain" />
      </TouchableOpacity>
    </>
  );
};

export default TitleFilter;
