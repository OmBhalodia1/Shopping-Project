import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  card: {
    width: 165,
    backgroundColor: '#fff',
    borderRadius: 14,
    alignItems: 'flex-start',
  },
  shadow: {
    shadowColor: '#222',
    shadowOpacity: 0.105,
    shadowOffset: { width: 2, height: 5 },
  },
  image: {
    width: 170,
    height: 160,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: '#FFFFFF',
    alignSelf: 'center',
    marginBottom: 10,
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
