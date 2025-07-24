import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { icons } from '../../utils/icons';
import { images } from '../../utils/images';

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

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  headerRight: {
    flex: 1,
    marginLeft: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  activityTitle: {
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 6,
    bottom: 4,
  },
  activityText: {
    padding: 2,
    fontSize: 21,
    fontFamily: 'Raleway',
    lineHeight: 30,
    letterSpacing: -0.21,
    fontWeight: '700',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: { fontSize: 20, marginLeft: 16 },
  icon1: {
    marginLeft: 16,
    borderRadius: 30,
    backgroundColor: '#F8F8F8',
  },
});
