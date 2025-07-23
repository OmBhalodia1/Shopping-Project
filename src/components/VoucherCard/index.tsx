import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import { icons } from '../../utils/icons';
import { styles } from './styles';
type VoucherCardProps = {
  label: string;
  validUntil: string;
  title: string;
  subtitle: string;
  onApply: (voucher: { title: string }) => void;
};

const VoucherCard: React.FC<VoucherCardProps> = ({
  label,
  validUntil,
  title,
  subtitle,
  onApply,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.voucherLabel}>{label}</Text>
        <Text style={styles.validUntil}>Valid Until {validUntil}</Text>
      </View>
      <View style={styles.dottedLine} />
      <View style={styles.contentRow}>
        <View style={styles.iconTextWrapper}>
          <Image source={icons.activeVoucher} style={styles.icon} />
          <View>
            <Text style={styles.voucherTitle}>{title}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            let discountMessage = '';
            if (title === 'First Purchase') {
              discountMessage = '5% Discount';
            } else if (title === 'Gift From Customer Care') {
              discountMessage = '15% Discount';
            } else {
              discountMessage = 'Default Discount';
            }

            onApply({ title: discountMessage });
          }}
        >
          <Text style={styles.buttonText}>Apply</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.voucherSubtitle}>{subtitle}</Text>
    </View>
  );
};

export default VoucherCard;
