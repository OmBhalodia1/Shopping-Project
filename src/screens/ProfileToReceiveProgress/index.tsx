import { SafeAreaView, Text, View, Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import ProfileHeader from '../../components/ProfileHeader';
import ProgressBar from '../../components/ProgressBar';
import { styles } from './styles';
import { icons } from '../../utils/icons';
import OrderStatus from '../../components/OrderStatus';
import { completedSteps, steps } from './data';
import ProfileDeliveryNotifications from '../ProfileDeliveryNotification';
import Section from '../../components/Section';

const ProfileToReceiveProgress = () => {
  const [progress, setProgress] = useState(0.3);
  const [isDeliveryNotification, setIsDeliveryNotification] = useState(false);
  const toggle = () => {
    setIsDeliveryNotification(!isDeliveryNotification);
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress(1);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  const stepsToShow = progress === 0.3 ? steps : completedSteps;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <ProfileHeader subtext="My Orders" />
        <ProgressBar progress={progress} />

        <Section
          sectionContent={
            <View style={styles.card}>
              <View style={styles.cardContent}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.label}>Tracking Number</Text>
                  <Text style={styles.trackingNumber}>
                    LGS-i92927839300763731
                  </Text>
                </View>
                <Image
                  source={icons.copy}
                  style={styles.icon}
                  resizeMode="contain"
                />
              </View>
            </View>
          }
        />

        <ScrollView
          contentContainerStyle={{ marginTop: 20 }}
          showsVerticalScrollIndicator={false}
        >
          <OrderStatus
            steps={stepsToShow}
            onPress={() => setIsDeliveryNotification(true)}
          />
        </ScrollView>
        <ProfileDeliveryNotifications
          onClose={() => setIsDeliveryNotification(false)}
          isOpen={isDeliveryNotification}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProfileToReceiveProgress;
