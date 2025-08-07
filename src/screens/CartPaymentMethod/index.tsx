import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { images } from '../../utils/images';
import { icons } from '../../utils/icons';
import BottomSheet from '../../components/BottomSheet';
import { styles } from './styles';
import ModalPaymentInProgress from '../../components/ModalPaymentInProgress';
import ModalPaymentFailed from '../../components/ModalPaymentFailed';
import ModalPaymentSuccess from '../../components/ModalPaymentSuccess';
import Modal from '../../components/Modal';

type CartPaymentMethodProps = {
  isOpen: boolean;
  onClose: () => void;
};

type CardType = {
  id: number;
  brand: 'mastercard' | 'visa';
  last4: string;
  name: string;
  expiry: string;
};

const CartPaymentMethod: React.FC<CartPaymentMethodProps> = ({
  isOpen,
  onClose,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMode, setModalMode] = useState<
    'paymentInProgress' | 'paymentFailed' | 'paymentSuccess'
  >('paymentInProgress');
  const [cards, setCards] = useState<CardType[]>([
    {
      id: 1,
      brand: 'mastercard',
      last4: '1579',
      name: 'AMANDA MORGAN',
      expiry: '12/22',
    },
  ]);

  const handleAddCard = () => {
    const newCard: CardType = {
      id: cards.length + 1,
      brand: 'visa',
      last4: '4032',
      name: 'AMANDA MORGAN',
      expiry: '08/27',
    };

    setCards([...cards, newCard]);
  };

  const handlePayment = () => {
    setModalMode('paymentInProgress');
    setModalVisible(true);

    setTimeout(() => {
      setModalMode('paymentFailed');
    }, 3000);
  };

  const handleTryAgain = () => {
    setModalMode('paymentInProgress');
    setModalVisible(true);

    setTimeout(() => {
      setModalMode('paymentSuccess');
    }, 3000);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <View
        style={{
          backgroundColor: '#FFFFFF',
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        }}
      >
        <View
          style={{
            backgroundColor: '#F1F4FE',
            marginBottom: 10,
            paddingVertical: 25,
            paddingLeft: 25,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        >
          <Text style={styles.header}>Payment Methods</Text>
        </View>
        <View style={styles.container}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.cardRow}>
              {cards.map(card => (
                <TouchableOpacity
                  key={card.id}
                  style={styles.card}
                  onPress={handlePayment}
                >
                  <View style={styles.topRow}>
                    <Image
                      source={
                        card.brand === 'mastercard'
                          ? images.MasterCard
                          : images.VisaCard
                      }
                      style={styles.mastercardLogo}
                    />
                    <TouchableOpacity>
                      <Image source={icons.settings2} />
                    </TouchableOpacity>
                  </View>

                  <Text style={styles.cardNumber}>
                    **** **** **** {card.last4}
                  </Text>

                  <View style={styles.cardFooter}>
                    <Text style={styles.cardName}>{card.name}</Text>
                    <Text style={styles.cardExpiry}>{card.expiry}</Text>
                  </View>
                </TouchableOpacity>
              ))}

              <TouchableOpacity
                style={styles.addButton}
                onPress={handleAddCard}
              >
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

          <Modal
            modalContent={
              <>
                {modalVisible && modalMode === 'paymentInProgress' && (
                  <ModalPaymentInProgress
                    visible={modalVisible}
                    onRequestClose={handleCloseModal}
                  />
                )}

                {modalVisible && modalMode === 'paymentFailed' && (
                  <ModalPaymentFailed
                    visible={modalVisible}
                    onRequestClose={handleCloseModal}
                    onTryAgain={handleTryAgain}
                  />
                )}

                {modalVisible && modalMode === 'paymentSuccess' && (
                  <ModalPaymentSuccess
                    visible={modalVisible}
                    onRequestClose={handleCloseModal}
                  />
                )}
              </>
            }
          />
        </View>
      </View>
    </BottomSheet>
  );
};

export default CartPaymentMethod;
