import { StyleSheet, Dimensions } from 'react-native';
const CARD_WIDTH = Dimensions.get('window').width * 0.26;
export const styles = StyleSheet.create({
  shadowWrapper: {
    width: CARD_WIDTH,
    borderRadius: 12,
    marginRight: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.102,
    shadowRadius: 8,
    marginBottom: 8,
    elevation: 3,
  },
  card: {
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingBottom: 10,
    marginTop: 2,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '85%',
    marginTop: 6,
  },
  points: {
    fontSize: 14,
    color: '#222',
    fontFamily: 'Raleway',
  },
  heart: {
    color: '#0042E0',
    fontSize: 15,
  },
  label: {
    fontSize: 14,
    color: '#555',
    fontFamily: 'NunitoSans-Bold',
  },
});
