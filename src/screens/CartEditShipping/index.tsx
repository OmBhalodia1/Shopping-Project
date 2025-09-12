import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  useWindowDimensions,
  StyleSheet,
} from 'react-native';
import BottomSheet from '../../components/BottomSheet';
import Button from '../../components/Button';
import Section from '../../components/Section';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
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

  const insets = useSafeAreaInsets();
  const { height, width } = useWindowDimensions();

  const scale = width / 375;
  const dynamicStyles = styles(scale);

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <View style={[dynamicStyles.container, { paddingBottom: insets.bottom }]}>
        <View style={dynamicStyles.headerContainer}>
          <Text style={dynamicStyles.header}>Shipping Address</Text>
        </View>

        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 20 }}
          showsVerticalScrollIndicator={false}
        >
          <Text style={dynamicStyles.label}>Country</Text>
          <View style={dynamicStyles.disabledField}>
            <Text style={dynamicStyles.disabledText}>India</Text>
            <View style={dynamicStyles.arrowCircle}>
              <Text style={dynamicStyles.arrow}>→</Text>
            </View>
          </View>

          <Section
            sectionContent={
              <>
                <Text style={dynamicStyles.label}>Address</Text>
                <TextInput
                  style={dynamicStyles.input}
                  placeholder="Enter your address"
                  value={address}
                  onChangeText={setAddress}
                  autoCorrect={false}
                />

                <Text style={dynamicStyles.label}>Town / City</Text>
                <TextInput
                  style={dynamicStyles.input}
                  placeholder="Enter your city"
                  value={city}
                  onChangeText={setCity}
                  autoCorrect={false}
                />

                <Text style={dynamicStyles.label}>Postcode</Text>
                <TextInput
                  style={dynamicStyles.input}
                  placeholder="Enter your postcode"
                  value={postcode}
                  onChangeText={setPostcode}
                  keyboardType="numeric"
                  autoCorrect={false}
                />
              </>
            }
          />

          <View style={{ marginTop: 16 }}>
            <Button title="Save Changes" onPress={handleSave} />
          </View>
        </ScrollView>
      </View>
    </BottomSheet>
  );
};

export default CartEditShipping;
