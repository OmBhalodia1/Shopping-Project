import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#FFFFFF' },
  container: { flex: 1, backgroundColor: '#FFFFFF', padding: 20 },
  innerContainer: { flex: 1, marginTop: 25 },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 40,
    backgroundColor: '#eef1fd',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  number: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  paymentContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  cardContainer: {
    backgroundColor: '#E5EBFC',
    borderRadius: 25,
    paddingVertical: 6,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  cardText: {
    color: '#004CFF',
    fontSize: 15,
    fontWeight: '700',
    fontFamily: 'Raleway',
    lineHeight: 19,
    letterSpacing: -0.15,
    textAlign: 'center',
  },
  deliveryText: {
    bottom: 8,
    marginLeft: 5,
    fontSize: 14,
    fontFamily: 'Nunito-Sans-Regular',
  },
});
