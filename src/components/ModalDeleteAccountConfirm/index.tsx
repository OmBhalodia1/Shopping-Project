import React from 'react';
import {
  Modal as ReactModal,
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
  onDelete?: () => void;
};

const ModalDeleteAccountConfirm: React.FC<Props> = ({
  visible,
  onRequestClose,
  onDelete,
}) => {
  return (
    <ReactModal
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
                You are going to delete{'\n'}your account
              </Text>
              <Text style={styles.modalText}>
                You won't be able to restore your data
              </Text>
              <View style={styles.buttonsRow}>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={onRequestClose}
                >
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={onDelete}
                >
                  <Text style={styles.deleteButtonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ReactModal>
  );
};

export default ModalDeleteAccountConfirm;
