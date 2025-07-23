import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#2179ee',
    marginBottom: 16,
    padding: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  voucherLabel: {
    color: '#004CFF',
    fontSize: 19,
    fontWeight: 'bold',
  },
  validUntil: {
    color: '#202020',
    backgroundColor: '#FFEBEB',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    fontSize: 14,
  },
  dottedLine: {
    borderWidth: 1,
    borderColor: '#004CFF',
    borderStyle: 'dashed',
    marginVertical: 10,
  },
  contentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  voucherSubtitle: {
    fontSize: 14,
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#004CFF',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 8,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
