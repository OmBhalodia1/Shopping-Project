import React, { useState } from 'react';
import { View, Button } from 'react-native';
import Modal from '../../components/Modal';

const CartPaymentModal = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleRetryLater = () => {
    setModalVisible(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Modal
        visible={isModalVisible}
        mode="maxAttempts"
        onRequestClose={() => setModalVisible(false)}
      />
    </View>
  );
};

export default CartPaymentModal;
