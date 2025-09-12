import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { icons } from '../../utils/icons';
import { images } from '../../utils/images';
import { styles } from './styles';
type ProfileHeaderProps = {
  subtext: string;
};

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ subtext }) => {
  return (
    <View style={styles.headerRow}>
      <View
        style={{
          shadowRadius: 3,
          shadowColor: '#222',
          shadowOpacity: 0.1608,
          borderRadius: 30,
          borderWidth: 4,
          borderColor: '#FFFFFF',
          elevation: 3,
        }}
      >
        <Image source={images.ProfilePhoto} style={styles.avatar} />
      </View>
      <View style={styles.headerRight}>
        <View style={styles.activityTitle}>
          <Text style={styles.activityText}>To Receive</Text>
          <Text>{subtext}</Text>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.headerIcons}>
            <Image source={icons.vouchers} style={styles.icon} />
          </TouchableOpacity>
          <View style={{ position: 'relative' }}>
            <TouchableOpacity style={styles.headerIcons}>
              <Image source={icons.topMenu} style={styles.icon} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Image source={icons.settings} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileHeader;
