import React from 'react';
import {
  Modal as ReactModal,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { images } from '../../utils/images';
import { styles } from './styles';

export type ModalMode =
  | 'maxAttempts'
  | 'paymentInProgress'
  | 'paymentFailed'
  | 'paymentSuccess';

export type ModalProps = {
  visible: boolean;
  mode: ModalMode;
  onRequestClose: () => void;
  onTryAgain?: () => void;
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
};

const Modal: React.FC<ModalProps> = ({
  visible,
  mode,
  onRequestClose,
  onTryAgain,
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
          onPress={onTryAgain || onRequestClose} // ✅ Use fallback if undefined
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
  }

  return (
    <ReactModal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onRequestClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <View style={styles.iconWrapper}>
            <Image source={iconSource} style={styles.iconImage} />
          </View>
          <View style={styles.modalContentBox}>
            <Text style={styles.modalTitle}>{title}</Text>
            <Text style={styles.modalText}>{message}</Text>

            {mode !== 'paymentInProgress' && (
              <View style={styles.buttonsOuterWrap}>{buttons}</View>
            )}
          </View>
        </View>
      </View>
    </ReactModal>
  );
};

export default Modal;
