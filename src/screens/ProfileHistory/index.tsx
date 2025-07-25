import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import { icons } from '../../utils/icons';
import { images } from '../../utils/images';
import ReviewOrders from '../../components/ReviewOrders';
import { styles } from './styles';
import { orders1 } from './data';

const ProfileHistory = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#FFFFFF' }}>
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
      <ScrollView showsVerticalScrollIndicator={false}>
        {orders1.map(order => (
          <ReviewOrders
            key={order.id}
            id={order.id}
            image={order.image}
            description={order.description}
            date={order.date}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileHistory;
