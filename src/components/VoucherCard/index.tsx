import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import { icons } from '../../utils/icons';
import { styles } from './styles';

export type Mode = 'red' | 'blue';

type VoucherCardProps = {
  label: string;
  validUntil: string;
  title: string;
  subtitle: string;
  mode?: Mode;
  isButtonRed?: boolean;
  isCollected?: boolean;
  daysLeft?: string;
  onApply?: (voucher: { title: string }) => void;
};

const VoucherCard: React.FC<VoucherCardProps> = ({
  label,
  validUntil,
  title,
  subtitle,
  mode = 'blue',
  isCollected = false,
  daysLeft,
  onApply,
  isButtonRed,
}) => {
  let icon = icons.activeVoucher;
  if (title === 'Gift From Customer Care') icon = icons.voucherGift;
  if (title === 'Loyal Customer') icon = icons.voucherHeart;

  const isRed = mode === 'red';

  return (
    <View style={[styles.card, isRed ? styles.redCard : styles.blueCard]}>
      <View style={styles.headerRow}>
        <Text
          style={[
            styles.voucherLabel,
            isRed ? styles.redText : styles.blueText,
          ]}
        >
          {label}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 6,
            backgroundColor: isButtonRed ? '#FFEBEB' : '#F9F9F9',
          }}
        >
          {isRed && daysLeft && (
            <Text style={styles.redDaysLeft}>{daysLeft} left</Text>
          )}
          <Text
            style={[
              styles.validUntil,
              isRed ? styles.redValidUntil : styles.blueValidUntil,
            ]}
          >
            Valid Until {validUntil}
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.dottedLine,
          isRed ? styles.redDottedLine : styles.blueDottedLine,
        ]}
      />
      <View style={{ gap: 10 }}>
        <View style={styles.iconTextWrapper}>
          <Image source={icon} style={styles.icon} />
          <Text style={styles.voucherTitle}>{title}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.voucherSubtitle}>{subtitle}</Text>
          <TouchableOpacity
            style={isCollected ? styles.collectedButton : styles.button}
          >
            <Text style={styles.buttonText}>
              {isCollected ? 'Collected' : 'Apply'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default VoucherCard;
