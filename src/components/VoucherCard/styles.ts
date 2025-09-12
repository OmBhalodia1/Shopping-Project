import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    borderWidth: 1.5,
    marginBottom: 16,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 4,
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
    fontFamily: 'Raleway',
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
    fontFamily: 'Raleway',
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
    fontFamily: 'Raleway',
  },
  voucherSubtitle: {
    fontSize: 13,
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#004CFF',
    borderRadius: 6,
    paddingHorizontal: 20,
    paddingVertical: 5,
    bottom: 10,
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
    fontFamily: 'Nunito-Sans-Regular',
    fontSize: 16,
  },
});
