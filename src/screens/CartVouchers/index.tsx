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
      <View style={styles.container}>
        <Text style={styles.activeVouchers}>Active Vouchers</Text>
        <VoucherCard
          label="Voucher"
          validUntil="5.16.20"
          title="First Purchase"
          subtitle="5% off for your next order"
          onApply={onApplyVoucher}
        />
        <VoucherCard
          label="Voucher"
          validUntil="6.20.20"
          title="Gift From Customer Care"
          subtitle="15% off your next purchase"
          onApply={onApplyVoucher}
        />
      </View>
    </BottomSheet>
  );
};

export default CartVouchers;
