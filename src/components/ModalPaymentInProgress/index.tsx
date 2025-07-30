import React from 'react';
import {
  Modal,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import { images } from '../../utils/images';
import { styles } from './styles';

export type ModalPaymentInProgressProps = {
  visible: boolean;
  onRequestClose: () => void;
};

const ModalPaymentInProgress: React.FC<ModalPaymentInProgressProps> = ({
  visible,
  onRequestClose,
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onRequestClose}
    >
      <TouchableWithoutFeedback onPress={onRequestClose}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.iconWrapper}>
              <Image
                source={images.PaymentProcessing}
                style={styles.iconImage}
              />
            </View>
            <View style={styles.modalContentBox}>
              <Text style={styles.modalTitle}>Payment is in progress</Text>
              <Text style={styles.modalText}>Please, wait a few moments</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModalPaymentInProgress;
