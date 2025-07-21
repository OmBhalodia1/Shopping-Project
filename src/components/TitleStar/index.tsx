import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { icons } from '../../utils/icons';

const TitleStar = () => {
  return (
    <>
      <Image style={{ marginTop: 5, marginLeft: 7 }} source={icons.star} />
    </>
  );
};

export default TitleStar;
