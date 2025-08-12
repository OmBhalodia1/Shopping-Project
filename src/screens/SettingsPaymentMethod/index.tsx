import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Title from '../../components/Title';
import Section from '../../components/Section';
import { images } from '../../utils/images';
import { icons } from '../../utils/icons';
import SettingsPaymentAddCard from '../SettingsPaymentAddCard';
import { styles } from './styles';
import OrderHistoryItem from '../../components/OrderHistoryItem';
import { orderHistoryData } from './data';
export type CardType = {
  id: number;
  brand: 'mastercard' | 'visa';
  last4: string;
  name: string;
  expiry: string;
};

const SettingsPaymentMethod = () => {
  const [isPaymentAddCardOpen, setIsPaymentAddCardOpen] = useState(false);
  const [cards, setCards] = useState<CardType[]>([
    {
      id: 1,
      brand: 'mastercard',
      last4: '1579',
      name: 'AMANDA MORGAN',
      expiry: '12/22',
    },
  ]);
  const [editingCard, setEditingCard] = useState<CardType | null>(null);

  const handleAddCard = () => {
    setEditingCard(null);
    setIsPaymentAddCardOpen(true);
  };

  const handleEditCard = (card: CardType) => {
    setEditingCard(card);
    setIsPaymentAddCardOpen(true);
  };

  const saveCard = (updatedCard: CardType) => {
    if (editingCard) {
      setCards(
        cards.map(card => (card.id === updatedCard.id ? updatedCard : card)),
      );
    } else {
      setCards([...cards, updatedCard]);
    }
  };

  return (
    <View style={styles.container}>
      <Title label="Settings" textStyle={{ fontSize: 28 }} />
      <Section
        title={<Title label="Payment Methods" />}
        sectionContent={
          <>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.cardRow}>
                {cards.map(card => (
                  <TouchableOpacity
                    key={card.id}
                    style={styles.card}
                    onPress={() => handleEditCard(card)}
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
                      <TouchableOpacity onPress={() => handleEditCard(card)}>
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
          </>
        }
      />
      <SettingsPaymentAddCard
        isOpen={isPaymentAddCardOpen}
        onClose={() => setIsPaymentAddCardOpen(false)}
        card={editingCard}
        onSave={saveCard}
      />
      <ScrollView style={{ marginTop: 20 }}>
        {orderHistoryData.map(item => (
          <OrderHistoryItem
            key={item.orderId}
            date={item.date}
            orderId={item.orderId}
            amount={item.amount}
            isNegative={item.isNegative}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default SettingsPaymentMethod;
