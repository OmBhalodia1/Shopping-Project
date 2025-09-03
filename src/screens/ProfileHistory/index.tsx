import {
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList,
  Platform,
} from 'react-native';
import React, { useState } from 'react';
import { icons } from '../../utils/icons';
import { images } from '../../utils/images';
import ReviewOrders from '../../components/ReviewOrders';
import { styles } from './styles';
import { orders1 } from './data';
import ProfileReview from '../ProfileReview';
import Section from '../../components/Section';

const ProfileHistory = () => {
  const [isProfileReview, setIsProfileReview] = useState(false);

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#FFFFFF',
        paddingBottom: Platform.OS === 'android' ? 80 : 0,
      }}
    >
      <Section
        sectionContent={
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
                <Text style={styles.activityText}>History</Text>
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
        }
      />
      <View style={styles.list}>
        <FlatList
          data={orders1}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <ReviewOrders
              id={item.id}
              image={item.image}
              description={item.description}
              date={item.date}
              onPress={() => setIsProfileReview(true)}
            />
          )}
        />
      </View>

      <ProfileReview
        isOpen={isProfileReview}
        onClose={() => setIsProfileReview(false)}
      />
    </SafeAreaView>
  );
};

export default ProfileHistory;
