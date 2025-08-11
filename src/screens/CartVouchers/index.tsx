import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import VoucherCard from '../../components/VoucherCard';
import BottomSheet from '../../components/BottomSheet';
import { styles } from './styles';

type CartVouchersProps = Readonly<{
  isOpen: boolean;
  onClose: () => void;
  onApplyVoucher: (voucher: { title: string }) => void;
}>;

const CartVouchers: React.FC<CartVouchersProps> = ({
  isOpen,
  onClose,
  onApplyVoucher,
}) => {
  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <View
        style={{
          backgroundColor: '#FFFFFF',
          // borderTopRightRadius: 16,
          // borderTopLeftRadius: 16,
        }}
      >
        <View style={styles.container}>
          <Text style={styles.activeVouchers}>Active Vouchers</Text>
        </View>
        <View style={{ paddingHorizontal: 16, paddingTop: 10 }}>
          <VoucherCard
            label="Voucher"
            isButtonRed
            validUntil="5.16.20"
            title="First Purchase"
            subtitle="5% off for your next order"
            onApply={onApplyVoucher}
          />
          <VoucherCard
            isButtonRed
            label="Voucher"
            validUntil="6.20.20"
            title="Gift From Customer Care"
            subtitle="15% off your next purchase"
            onApply={onApplyVoucher}
          />
        </View>
      </View>
    </BottomSheet>
  );
};

export default CartVouchers;
