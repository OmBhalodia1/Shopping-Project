import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import BottomSheet from '../../components/BottomSheet';
import Button from '../../components/Button';
import { styles } from './styles';
import { CardType } from '../SettingsPaymentMethod';
import Section from '../../components/Section';
type SettingsPaymentAddCardProps = {
  isOpen: boolean;
  onClose: () => void;
  card: CardType | null;
  onSave: (updatedCard: CardType) => void;
};

const SettingsPaymentAddCard: React.FC<SettingsPaymentAddCardProps> = ({
  isOpen,
  onClose,
  card,
  onSave,
}) => {
  const [cardHolder, setCardHolder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [valid, setValid] = useState('');
  const [cvv, setCvv] = useState('');

  useEffect(() => {
    if (card) {
      setCardHolder(card.name);
      setCardNumber('**** **** **** ' + card.last4);
      setValid(card.expiry);
    }
  }, [card]);

  const handleCardNumberChange = (text: string) => {
    const cleanedText = text.replace(/\D/g, '');
    if (text.length <= 16) {
      const formattedText = cleanedText.replace(/(\d{4})(?=\d)/g, '$1 ');
      setCardNumber(formattedText);
    }
  };

  const handleSave = () => {
    const newCard: CardType = {
      id: card ? card.id : Math.random(),
      brand: 'visa',
      last4: cardNumber.slice(-4),
      name: cardHolder,
      expiry: valid,
    };
    onSave(newCard);
    onClose();
  };

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{card ? 'Edit Card' : 'Add Card'}</Text>
      </View>
      <View>
        <View style={styles.innerContainer}>
          <Section
            sectionContent={
              <>
                <Text style={styles.label}>Card Holder</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Required"
                  placeholderTextColor="#B0BCEB"
                  value={cardHolder}
                  onChangeText={setCardHolder}
                />

                <Text style={[styles.label, { marginTop: 24 }]}>
                  Card Number
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Required"
                  placeholderTextColor="#B0BCEB"
                  keyboardType="numeric"
                  value={cardNumber}
                  onChangeText={handleCardNumberChange}
                />
              </>
            }
          />

          <Section
            sectionContent={
              <View style={styles.row}>
                <View style={styles.column}>
                  <Text style={styles.label}>Valid</Text>
                  <TextInput
                    style={styles.inputSmall}
                    placeholder="Required"
                    placeholderTextColor="#B0BCEB"
                    value={valid}
                    onChangeText={setValid}
                  />
                </View>
                <View style={styles.column}>
                  <Text style={styles.label}>CVV</Text>
                  <TextInput
                    style={styles.inputSmall}
                    placeholder="Required"
                    placeholderTextColor="#B0BCEB"
                    secureTextEntry
                    value={cvv}
                    onChangeText={setCvv}
                  />
                </View>
              </View>
            }
          />
          <Button title="Save Changes" onPress={handleSave} />
        </View>
      </View>
    </BottomSheet>
  );
};

export default SettingsPaymentAddCard;
