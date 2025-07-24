import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import BottomSheet from '../../components/BottomSheet';
import Button from '../../components/Button';
import { styles } from './styles';

type CartEditShippingProps = Readonly<{
  isOpen: boolean;
  onClose: () => void;
  address: string;
  setAddress: (val: string) => void;
  city: string;
  setCity: (val: string) => void;
  postcode: string;
  setPostcode: (val: string) => void;
}>;

const CartEditShipping: React.FC<CartEditShippingProps> = ({
  isOpen,
  onClose,
  address,
  setAddress,
  city,
  setCity,
  postcode,
  setPostcode,
}) => {
  const handleSave = () => {
    onClose();
  };

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <View style={styles.container}>
        <View style={{ backgroundColor: '#F8FAFF' }}>
          <Text style={styles.header}>Shipping Address</Text>
        </View>

        <Text style={styles.label}>Country</Text>
        <View style={styles.disabledField}>
          <Text style={styles.disabledText}>India</Text>
          <View style={styles.arrowCircle}>
            <Text style={styles.arrow}>→</Text>
          </View>
        </View>

        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your address"
          value={address}
          onChangeText={setAddress}
          autoCorrect={false}
        />

        <Text style={styles.label}>Town / City</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your city"
          value={city}
          onChangeText={setCity}
          autoCorrect={false}
        />

        <Text style={styles.label}>Postcode</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your postcode"
          value={postcode}
          onChangeText={setPostcode}
          keyboardType="numeric"
          autoCorrect={false}
        />

        <View style={{ marginTop: 10 }}>
          <Button title="Save Changes" onPress={handleSave} />
        </View>
      </View>
    </BottomSheet>
  );
};

export default CartEditShipping;
