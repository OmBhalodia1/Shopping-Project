import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingTop: 20,
    paddingHorizontal: 18,
    paddingBottom: 30,
  },
  header: {
    fontFamily: 'Raleway',
    fontSize: 28,
    color: '#131313',
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  card: {
    width: 300,
    backgroundColor: '#F1F4FE',
    borderRadius: 14,
    padding: 18,
    marginRight: 20,
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
    fontFamily: 'Nunito-Sans-Regular',
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
    width: 48,
    height: 160,
    backgroundColor: '#004CFF',
    borderRadius: 14,
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
