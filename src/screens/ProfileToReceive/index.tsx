import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ProfileHeader from '../../components/ProfileHeader';
import ProfileOrder from '../../components/ProfileOrder';
import { images } from '../../utils/images';

const ProfileToReceive = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={{ flex: 1, padding: 20 }}>
        <ProfileHeader subtext="My Orders" />
      </View>
      <ProfileOrder
        images={[images.AllItems10, images.AllItems2]}
        orderId="#113131313"
        itemsCount={2}
        mode="delivered"
        buttonText="Review"
      />
    </SafeAreaView>
  );
};

export default ProfileToReceive;

const styles = StyleSheet.create({});
