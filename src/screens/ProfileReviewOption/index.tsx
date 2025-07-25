import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import BottomSheet from '../../components/BottomSheet';
import ReviewOrders from '../../components/ReviewOrders';
import { orders } from './data';
import { styles } from './styles';

type ProfileReviewOptionProps = Readonly<{
  isOpen: boolean;
  onClose: () => void;
}>;

const ProfileReviewOption: React.FC<ProfileReviewOptionProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <ScrollView contentContainerStyle={styles.card}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Which Item You Want To Review?</Text>
        </View>

        {orders.map(order => (
          <ReviewOrders
            key={order.id}
            id={order.id}
            image={order.image}
            description={order.description}
            date={order.date}
          />
        ))}
      </ScrollView>
    </BottomSheet>
  );
};

export default ProfileReviewOption;
