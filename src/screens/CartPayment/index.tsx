import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Title from '../../components/Title';
import InfoSection from '../../components/InfoSection';
import Section from '../../components/Section';
import Button from '../../components/Button';
import CartItemsList from '../../components/CartItemsList';
import { images } from '../../utils/images';
import DeliveryOptions from '../../components/DeliveryOptions';
import { icons } from '../../utils/icons';
import { styles } from './styles';
import CartVouchers from '../CartVouchers';
import CartFooter from '../../components/CartFooter';
import CartPaymentMethod from '../CartPaymentMethod';

const CartPayment = () => {
  const [appliedVoucher, setAppliedVoucher] = useState<string | null>(null);
  const [isCartVouchersOpen, setIsCartVouchersOpen] = useState(false);
  const [isCartPaymentOpen, setIsCartPaymentOpen] = useState(false);

  return (
    <View style={styles.root}>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.innerContainer}>
          <Title label="Payment" textStyle={{ fontSize: 26 }} />

          <Section
            sectionContent={
              <>
                <InfoSection
                  info="Shipping Address"
                  address="26, Duong So 2, Thao Dien Ward, An Phu, District 2, Ho Chi Minh city"
                />
                <InfoSection
                  info="Contact Information"
                  address="+84932000000, amandamorgan@example.com"
                />
              </>
            }
          />

          <Section
            title={
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Title
                  label="Items"
                  rightElement={
                    <View style={styles.circle}>
                      <Text style={styles.number}>2</Text>
                    </View>
                  }
                />
                <Button
                  mode={appliedVoucher ? 'contained' : 'outline'}
                  title={appliedVoucher || 'Add Voucher'}
                  style={{
                    height: 35,
                    width: 120,
                    marginTop: 10,
                    borderRadius: 11,
                  }}
                  onPress={() => {
                    if (!appliedVoucher) {
                      setIsCartVouchersOpen(true);
                    }
                  }}
                />
              </View>
            }
            sectionContent={
              <>
                <CartItemsList
                  imageSource={images.MostPopular2}
                  price="$17,00"
                />
                <CartItemsList
                  imageSource={images.MostPopular3}
                  price="$17,00"
                />
              </>
            }
          />

          <Section
            title={<Title label="Shipping Options" />}
            sectionContent={
              <>
                <DeliveryOptions
                  days="5-7"
                  deliveryType="Standard"
                  price="Free"
                />
                <DeliveryOptions
                  days="1-2"
                  deliveryType="Express"
                  price="$12,00"
                />
                <Text style={{ marginLeft: 5, fontSize: 12 }}>
                  Delivered on or before Thursday, 23 April 2020
                </Text>
              </>
            }
          />

          <View style={styles.paymentContainer}>
            <Title label="Payment Method" />
            <TouchableOpacity>
              <Image
                source={icons.edit}
                resizeMode="contain"
                style={{ marginTop: 10 }}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.cardContainer} activeOpacity={0.7}>
            <Text style={styles.cardText}>Card</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <CartVouchers
        isOpen={isCartVouchersOpen}
        onClose={() => setIsCartVouchersOpen(false)}
        onApplyVoucher={voucher => {
          setAppliedVoucher(voucher.title);
          setIsCartVouchersOpen(false);
        }}
      />

      <CartPaymentMethod
        isOpen={isCartPaymentOpen}
        onClose={() => setIsCartPaymentOpen(false)}
      />

      <CartFooter
        total={34}
        title="Pay"
        style={{ backgroundColor: '#000000' }}
        onPress={() => setIsCartPaymentOpen(true)}
      />
    </View>
  );
};

export default CartPayment;
