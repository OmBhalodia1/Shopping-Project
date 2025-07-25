import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import ProfileHeader from '../../components/ProfileHeader';
import ProfileOrder, { ProfileOrderProps } from '../../components/ProfileOrder';

import { styles } from './styles';
import { ORDERS } from './data';
import ProfileReviewOption from '../ProfileReviewOption';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/RootStackParamList';

type NavigationProp = StackNavigationProp<
  RootStackParamList,
  'BottomTabNavigator'
>;

const ProfileToReceive: React.FC<{ navigation: NavigationProp }> = ({
  navigation,
}) => {
  const [isProfileReviewOption, setIsProfileReviewOption] = useState(false);
  const toggle = () => {
    setIsProfileReviewOption(!isProfileReviewOption);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <ProfileHeader subtext="My Orders" />
      </View>
      <ScrollView>
        {ORDERS.map((order, idx) => (
          <ProfileOrder
            key={idx}
            images={order.images}
            orderId={order.orderId}
            itemsCount={order.itemsCount}
            deliveryType={order.deliveryType}
            mode={order.mode}
            buttonText={order.buttonText}
            onReviewButtonPress={() => setIsProfileReviewOption(true)}
            onTrackButtonPress={() =>
              navigation.navigate('ProfileToReceiveProgress')
            }
          />
        ))}
      </ScrollView>
      <ProfileReviewOption
        onClose={() => setIsProfileReviewOption(false)}
        isOpen={isProfileReviewOption}
      />
    </SafeAreaView>
  );
};

export default ProfileToReceive;
