import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 5,
  },
  card: {
    width: '50%',
    alignItems: 'flex-start',
    paddingBottom: 8,
  },
  shadow: {
    width: '100%',
    padding: 4,
    borderRadius: 14,
    shadowColor: '#222',
    shadowOpacity: 0.125,
    shadowOffset: { width: 0, height: 5 },
    backgroundColor: 'white',
    elevation: 4,
  },
  image: {
    width: '100%',
    borderRadius: 10,
    borderWidth: 4,
    borderColor: '#FFFFFF',
  },
  name: {
    marginTop: 8,
    fontSize: 12,
    color: '#000000',
    marginBottom: 5,
    fontFamily: 'NunitoSans-Regular',
    lineHeight: 16,
    letterSpacing: 0,
  },
  price: {
    fontSize: 17,
    color: '#202020',
    fontFamily: 'Raleway',
    lineHeight: 21,
    letterSpacing: -0.17,
  },
});
