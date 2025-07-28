import { Mode } from '../../components/VoucherCard';

export type Voucher = {
  label: string;
  validUntil: string;
  title: string;
  subtitle: string;
  mode: Mode;
  isCollected: boolean;
  daysLeft?: string;
};

export const voucherList: Voucher[] = [
  {
    label: 'Voucher',
    validUntil: '4.21.20',
    title: 'First Purchase',
    subtitle: '5% off for your next order',
    mode: 'red',
    isCollected: true,
    daysLeft: '3 days',
  },
  {
    label: 'Voucher',
    validUntil: '6.20.20',
    title: 'Gift From Customer Care',
    subtitle: '15% off your next purchase',
    mode: 'blue',
    isCollected: true,
  },
  {
    label: 'Voucher',
    validUntil: '6.20.20',
    title: 'Loyal Customer',
    subtitle: '10% off your next purchase',
    mode: 'blue',
    isCollected: true,
  },
];
