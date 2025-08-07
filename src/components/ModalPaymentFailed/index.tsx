import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import { images } from '../../utils/images';
import { styles } from './styles';

export type ModalPaymentFailedProps = {
  visible: boolean;
  onRequestClose: () => void;
  onTryAgain?: () => void;
};

const ModalPaymentFailed: React.FC<ModalPaymentFailedProps> = ({
  visible,

  onRequestClose,
  onTryAgain,
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
              <Image source={images.PaymentError} style={styles.iconImage} />
            </View>
            <View style={styles.modalContentBox}>
              <Text style={styles.modalTitle}>
                We couldn't proceed {'\n'}
                your payment
              </Text>
              <Text style={styles.modalText}>
                Please, change your payment method or try again
              </Text>

              <View style={styles.buttonsOuterWrap}>
                <View style={styles.buttonsRow}>
                  <TouchableOpacity
                    style={[styles.primaryButton, styles.buttonHalfWidth]}
                    onPress={onTryAgain || onRequestClose}
                  >
                    <Text style={styles.buttonText}>Try Again</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.secondaryButton, styles.buttonHalfWidth]}
                    onPress={onRequestClose}
                  >
                    <Text
                      style={[styles.buttonText, styles.secondaryButtonText]}
                    >
                      Change
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModalPaymentFailed;
