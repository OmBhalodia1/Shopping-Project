import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    width: 145,
    backgroundColor: '#fffFFF',
    borderRadius: 14,
    paddingBottom: 12,
    alignItems: 'flex-start',
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 10,
    alignSelf: 'center',
  },
  name: {
    fontSize: 12,
    color: '#000000',
    marginBottom: 8,
    fontWeight: '400',
    fontFamily: 'Nunito-Sans',
    lineHeight: 16,
    letterSpacing: 0,
  },
  price: {
    fontWeight: '700',
    fontSize: 17,
    color: '#202020',
    fontFamily: 'Raleway',
    lineHeight: 21,
    letterSpacing: -0.17,
  },
});
