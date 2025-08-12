import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { images } from '../../utils/images';
import { icons } from '../../utils/icons';
import ImageRow from '../../components/ImageRow';
import { styles } from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/RootStackParamList';
import Section from '../../components/Section';
import ProfileStoriesSection from '../../components/ProfileStoriesSection';

const recentlyViewed = [
  { source: images.RecentlyViewed1 },
  { source: images.RecentlyViewed2 },
  { source: images.RecentlyViewed3 },
  { source: images.RecentlyViewed4 },
  { source: images.RecentlyViewed5 },
];

type NavigationProp = StackNavigationProp<
  RootStackParamList,
  'BottomTabNavigator'
>;

export const Profile: React.FC<{ navigation: NavigationProp }> = ({
  navigation,
}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Section
          sectionContent={
            <View style={styles.headerRow}>
              <View style={styles.imageContainer}>
                <Image source={images.ProfilePhoto} style={styles.avatar} />
              </View>
              <View style={styles.headerRight}>
                <View style={styles.activityTitle}>
                  <Text style={styles.activityText}>My Activity</Text>
                </View>
                <View style={styles.headerIcons}>
                  <TouchableOpacity
                    style={styles.headerIcons}
                    onPress={() => navigation.navigate('ProfileVoucher')}
                  >
                    <Image source={icons.vouchers} style={styles.icon} />
                  </TouchableOpacity>
                  <View style={{ position: 'relative' }}>
                    <TouchableOpacity style={styles.headerIcons}>
                      <Image source={icons.topMenu} style={styles.icon} />
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Settings')}
                  >
                    <Image source={icons.settings} style={styles.icon} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          }
        />

        <Text style={styles.greeting}>Hello, Romina!</Text>

        <Section
          sectionContent={
            <View style={styles.announcementBox}>
              <View style={styles.announcementRow}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.announcementTitle}>Announcement</Text>
                  <Text style={styles.announcementDesc}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas hendrerit luctus libero ac vulputate.
                  </Text>
                </View>
                <TouchableOpacity style={styles.arrowCircle}>
                  <Text style={styles.arrow}>{'→'}</Text>
                </TouchableOpacity>
              </View>
            </View>
          }
        />

        <Section
          sectionContent={
            <>
              <Section
                sectionContent={
                  <>
                    <Text style={styles.sectionTitle}>Recently viewed</Text>
                    <ImageRow imageList={recentlyViewed} />
                  </>
                }
              />

              <Section
                sectionContent={
                  <>
                    <Text style={styles.sectionTitle}>My Orders</Text>
                    <View style={styles.orderRow}>
                      <TouchableOpacity style={styles.orderBtn}>
                        <Text style={styles.orderBtnText}>To Pay</Text>
                      </TouchableOpacity>

                      <View style={{ position: 'relative' }}>
                        <TouchableOpacity
                          style={styles.orderBtn}
                          onPress={() =>
                            navigation.navigate('ProfileToReceive')
                          }
                        >
                          <Text style={styles.orderBtnText}>To Receive</Text>
                        </TouchableOpacity>
                        <View style={styles.whiteCircle} />
                        <View style={styles.greenDot} />
                      </View>

                      <TouchableOpacity
                        style={styles.orderBtn}
                        onPress={() => navigation.navigate('ProfileHistory')}
                      >
                        <Text style={styles.orderBtnText}>To Review</Text>
                      </TouchableOpacity>
                    </View>
                  </>
                }
              />
            </>
          }
        />

        <Section
          sectionContent={
            <>
              <Text style={styles.sectionTitle}>Stories</Text>
              <ProfileStoriesSection />
            </>
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
};
