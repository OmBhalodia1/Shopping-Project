import React from 'react';
import {
  Modal,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import { images } from '../../utils/images';
import { icons } from '../../utils/icons';
import { styles } from './styles';
type Props = {
  visible: boolean;
  onRequestClose: () => void;
  rating?: number;
};

const ModalReviewSuccess: React.FC<Props> = ({
  visible,
  onRequestClose,
  rating = 0,
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
              <Image source={images.reviewDone} style={styles.iconImage} />
            </View>
            <View style={styles.modalContentBox}>
              <Text style={styles.modalTitle}>Done!</Text>
              <Text style={styles.modalText}>Thank you for your review</Text>
              <View style={styles.star}>
                {[0, 1, 2, 3, 4].map(idx => (
                  <Image
                    key={idx}
                    source={
                      idx < rating ? icons.starFilled : icons.starNotFilled
                    }
                    resizeMode="contain"
                    style={[styles.imageStar, idx === 4 && { marginRight: 0 }]}
                  />
                ))}
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModalReviewSuccess;
