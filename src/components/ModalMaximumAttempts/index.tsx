import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import { images } from '../../utils/images';
import { styles } from './styles';
export type ModalMaximumAttemptsProps = {
  visible: boolean;
  onRequestClose: () => void;
};

const ModalMaximumAttempts: React.FC<ModalMaximumAttemptsProps> = ({
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
              <Image source={images.PaymentError} style={styles.iconImage} />
            </View>
            <View style={styles.modalContentBox}>
              <Text style={styles.modalText}>
                You reached out maximum {'\n'}amount of attempts.{'\n'}Please,
                try later.
              </Text>
              <TouchableOpacity
                style={styles.primaryButton}
                onPress={onRequestClose}
              >
                <Text style={styles.buttonText}>Okay</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModalMaximumAttempts;
