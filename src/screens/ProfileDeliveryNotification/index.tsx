import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import BottomSheet from '../../components/BottomSheet';
import Button from '../../components/Button';
import { styles } from './styles';

type ProfileDeliveryNotificationsProps = {
  isOpen: boolean;
  onClose: () => void;
};
const ProfileDeliveryNotifications: React.FC<
  ProfileDeliveryNotificationsProps
> = ({ isOpen, onClose }) => {
  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <View style={styles.header}>
        <Text style={styles.headerText}>ProfileDeliveryNotifications</Text>
      </View>
      <View style={{ padding: 20, backgroundColor: '#FFFFFF' }}>
        <Text style={styles.headerText}>What should I do?</Text>
        <Text style={styles.subtext}>
          Don't worry, we will shortly contact you to arrange more suitable time
          for the delivery. You can also contact us by using this number +00 000
          000 000 or chat with our customer care service
        </Text>
        <Button title="Chat Now" />
      </View>
    </BottomSheet>
  );
};

export default ProfileDeliveryNotifications;
