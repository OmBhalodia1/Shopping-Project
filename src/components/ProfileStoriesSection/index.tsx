import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { images } from '../../utils/images';
import { styles } from './styles';

const stories = [
  images.Stories1,
  images.Stories2,
  images.Stories3,
  images.Stories3,
];
const ProfileStoriesSection = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.storiesRow}
    >
      {stories.map((img, idx) => (
        <View key={idx}>
          {idx === 0 && (
            <View style={styles.liveBadge}>
              <Text style={styles.liveBadgeText}>Live</Text>
            </View>
          )}
          <Image source={img} style={styles.storyImage} />
        </View>
      ))}
    </ScrollView>
  );
};

export default ProfileStoriesSection;
