import React from 'react';
import {
  Modal,
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { images } from '../../utils/images';
import { styles } from './styles';
type Props = {
  visible: boolean;
  onRequestClose: () => void;
};

const ModalPaymentSuccess: React.FC<Props> = ({ visible, onRequestClose }) => {
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
              <Image source={images.PaymentSuccess} style={styles.iconImage} />
            </View>
            <View style={styles.modalContentBox}>
              <Text style={styles.modalTitle}>Done!</Text>
              <Text style={styles.modalText}>
                Your card has been successfully charged
              </Text>
              <View style={styles.buttonsOuterWrap}>
                <TouchableOpacity
                  style={styles.primaryButton}
                  onPress={onRequestClose}
                >
                  <Text style={styles.buttonText}>Track My Order</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModalPaymentSuccess;
