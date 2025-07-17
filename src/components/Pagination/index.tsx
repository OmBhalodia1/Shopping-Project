import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
const Pagination = () => {
  return (
    <View style={styles.pagination}>
      <View style={[styles.dot, styles.activeDot]} />
      <View style={styles.dot} />
      <View style={styles.dot} />
      <View style={styles.dot} />
      <View style={styles.dot} />
    </View>
  );
};

export default Pagination;
