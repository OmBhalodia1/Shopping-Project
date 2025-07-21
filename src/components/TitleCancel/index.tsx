import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

type TitleCancelProps = {
  onPress?: () => void;
};
const TitleCancel: React.FC<TitleCancelProps> = ({ onPress }) => {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <Text style={{ fontSize: 20, marginRight: 5, fontWeight: '900' }}>
          ✕
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default TitleCancel;
