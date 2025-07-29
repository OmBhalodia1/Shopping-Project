import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    paddingTop: 50,
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 20,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginRight: 12,
  },
  card: {
    width: 280,
    height: 150,
    backgroundColor: '#F1F4FE',
    borderRadius: 20,
    padding: 20,
    marginRight: 14,
    justifyContent: 'space-between',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mastercardLogo: {
    width: 50,
    height: 30,
    resizeMode: 'contain',
  },
  gearCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingsIcon: {
    width: 18,
    height: 18,
  },
  cardNumber: {
    fontSize: 18,
    letterSpacing: 3,
    color: '#202020',
    marginTop: 20,
    marginBottom: 12,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardName: {
    fontSize: 15,
    fontWeight: '500',
    color: '#202020',
  },
  cardExpiry: {
    fontSize: 15,
    color: '#202020',
  },
  addButton: {
    width: 55,
    height: 145,
    backgroundColor: '#004CFF',
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    fontSize: 32,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 4,
  },
});
