import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    borderWidth: 1.5,
    marginBottom: 16,
    padding: 20,
    backgroundColor: '#fff',
  },
  redCard: {
    borderColor: '#FF7D7D',
  },
  blueCard: {
    borderColor: '#2179ee',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  voucherLabel: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  redText: {
    color: '#DD7E7E',
  },
  blueText: {
    color: '#004CFF',
  },
  redDaysLeft: {
    color: '#DD7E7E',
    marginRight: 10,
    fontSize: 14,
  },
  validUntil: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    fontSize: 14,
    marginLeft: 6,
  },
  redValidUntil: {
    color: '#A05B5B',
    backgroundColor: '#FFEDED',
  },
  blueValidUntil: {
    color: '#004CFF',
    backgroundColor: 'transparent',
  },
  dottedLine: {
    marginVertical: 10,
    borderStyle: 'dashed',
    borderWidth: 1,
  },
  redDottedLine: {
    borderColor: '#FF7D7D',
  },
  blueDottedLine: {
    borderColor: '#004CFF',
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 22,
    height: 22,
    marginRight: 10,
    resizeMode: 'contain',
  },
  voucherTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  voucherSubtitle: {
    fontSize: 13,
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#004CFF',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 8,
    alignSelf: 'center',
  },
  collectedButton: {
    backgroundColor: '#004CFF',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginLeft: 10,
    alignItems: 'baseline',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
