import React from 'react';
import {
  Modal as ReactModal,
  View,
  Text,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import { images } from '../../utils/images';
import { styles } from './styles';
import { icons } from '../../utils/icons';

export type ModalMode =
  | 'maxAttempts'
  | 'paymentInProgress'
  | 'paymentFailed'
  | 'reviewSuccess'
  | 'paymentSuccess'
  | 'deleteAccountConfirm';

export type ModalProps = {
  visible: boolean;
  mode: ModalMode;
  onRequestClose: () => void;
  onTryAgain?: () => void;
  rating?: number;
};

const modalMessages: Record<
  ModalMode,
  { title: string; message: string; iconSource: any }
> = {
  maxAttempts: {
    title: 'Error!',
    message: 'You reached out maximum\namount of attempts.\nPlease, try later.',
    iconSource: images.PaymentError,
  },
  paymentInProgress: {
    title: 'Payment is in progress',
    message: 'Please, wait a few moments',
    iconSource: images.PaymentProcessing,
  },
  paymentFailed: {
    title: "We couldn't proceed your payment",
    message: 'Please, change your payment method or try again',
    iconSource: images.PaymentError,
  },
  paymentSuccess: {
    title: 'Done!',
    message: 'Your card has been successfully charged',
    iconSource: images.PaymentSuccess,
  },
  reviewSuccess: {
    title: 'Done!',
    message: 'Thank you for your review',
    iconSource: images.reviewDone,
  },
  deleteAccountConfirm: {
    title: 'You are going to delete\nyour account',
    message: "You won't be able to restore your data",
    iconSource: images.PaymentError,
  },
};

const Modal: React.FC<ModalProps> = ({
  visible,
  mode,
  onRequestClose,
  onTryAgain,
  rating = 0,
}) => {
  const { title, message, iconSource } = modalMessages[mode];

  let buttons: React.ReactNode = null;

  if (mode === 'maxAttempts') {
    buttons = (
      <TouchableOpacity style={styles.primaryButton} onPress={onRequestClose}>
        <Text style={styles.buttonText}>Okay</Text>
      </TouchableOpacity>
    );
  } else if (mode === 'paymentFailed') {
    buttons = (
      <View style={styles.buttonsRow}>
        <TouchableOpacity
          style={[styles.secondaryButton, styles.buttonHalfWidth]}
          onPress={onRequestClose}
        >
          <Text style={[styles.buttonText, styles.secondaryButtonText]}>
            Change
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.primaryButton, styles.buttonHalfWidth]}
          onPress={onTryAgain || onRequestClose}
        >
          <Text style={styles.buttonText}>Try Again</Text>
        </TouchableOpacity>
      </View>
    );
  } else if (mode === 'paymentSuccess') {
    buttons = (
      <TouchableOpacity style={styles.primaryButton} onPress={onRequestClose}>
        <Text style={styles.buttonText}>Track My Order</Text>
      </TouchableOpacity>
    );
  } else if (mode === 'deleteAccountConfirm') {
    buttons = (
      <View style={styles.buttonsRow}>
        <TouchableOpacity style={styles.cancelButton} onPress={onRequestClose}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={onTryAgain || onRequestClose}
        >
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  }

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
              <Image source={iconSource} style={styles.iconImage} />
            </View>
            <View style={styles.modalContentBox}>
              <Text style={styles.modalTitle}>{title}</Text>
              <Text style={styles.modalText}>{message}</Text>
              {!['paymentInProgress', 'reviewSuccess'].includes(mode) && (
                <View style={styles.buttonsOuterWrap}>{buttons}</View>
              )}
              {mode === 'reviewSuccess' && (
                <View style={styles.star}>
                  {[0, 1, 2, 3, 4].map(idx => (
                    <Image
                      key={idx}
                      source={
                        idx < rating ? icons.starFilled : icons.starNotFilled
                      }
                      resizeMode="contain"
                      style={[
                        styles.imageStar,
                        idx === 4 && { marginRight: 0 },
                      ]}
                    />
                  ))}
                </View>
              )}
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ReactModal>
  );
};

export default Modal;
