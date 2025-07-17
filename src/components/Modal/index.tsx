import React from 'react';
import {
  Modal as ReactModal,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import { useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

type ModalProps = {
  visible: boolean;
  onOkay: () => void;
};

const Modal: React.FC<ModalProps> = ({ visible, onOkay }) => {
  return (
    <ReactModal visible={visible} transparent animationType="fade">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <View style={styles.exclamationWrapper}>
            <View style={styles.circleOuter}>
              <View style={styles.circleMiddle}>
                <View style={styles.circleInner}>
                  <Text style={styles.exclamationText}>!</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.modalContentBox}>
            <Text style={styles.modalText}>
              You reached out maximum{'\n'}amount of attempts.{'\n'}Please, try
              later.
            </Text>
            <TouchableOpacity style={styles.okayButton} onPress={onOkay}>
              <Text style={styles.okayButtonText}>Okay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ReactModal>
  );
};

export default Modal;
