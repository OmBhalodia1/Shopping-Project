import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { icons } from '../../utils/icons';
import { styles } from './styles';

const TitleTimer = () => (
  <View style={styles.container}>
    <View style={styles.timerRow}>
      <Image source={icons.clock} resizeMode="contain" style={styles.icon} />
      <View style={styles.timeBoxes}>
        <View style={styles.timeBox}>
          <Text style={styles.timeValue}>00</Text>
        </View>
        <View style={styles.timeBox}>
          <Text style={styles.timeValue}>36</Text>
        </View>
        <View style={styles.timeBox}>
          <Text style={styles.timeValue}>58</Text>
        </View>
      </View>
    </View>
  </View>
);

export default TitleTimer;
