import React from 'react';
import { View, StyleSheet } from 'react-native';
import { styles } from './styles';

type ProgressBarProps = {
  progress: number;
};
const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  const progressPercent = progress * 100;
  const isFirstActive = progress >= 0;
  const isSecondActive = progress >= 0.5;
  const isThirdActive = progress >= 1;

  return (
    <View style={styles.container}>
      <View style={styles.track} />
      <View style={[styles.progressFill, { width: `${progressPercent}%` }]} />
      <View style={[styles.circleWrapper, { left: -4 }]}>
        <View style={styles.circleOuter}>
          <View
            style={isFirstActive ? styles.circleActive : styles.circleInactive}
          />
        </View>
      </View>
      <View style={[styles.circleWrapper, { left: '50%', marginLeft: -20 }]}>
        <View style={styles.circleOuter}>
          <View
            style={isSecondActive ? styles.circleActive : styles.circleInactive}
          />
        </View>
      </View>
      <View style={[styles.circleWrapper, { right: -4 }]}>
        <View style={styles.circleOuter}>
          <View
            style={isThirdActive ? styles.circleActive : styles.circleInactive}
          />
        </View>
      </View>
    </View>
  );
};

export default ProgressBar;
