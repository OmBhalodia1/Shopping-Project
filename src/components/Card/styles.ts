import { Dimensions, Platform, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');
const CARD_WIDTH = Math.min(width * 0.9, 350);

export const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 8 },
    shadowOpacity: 0.1608,
    shadowRadius: 32,
    alignItems: 'center',
    elevation: 4,
  },

  cardImage: {
    width: CARD_WIDTH,
    height: '60%',
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
  },
  textWrapper: {
    padding: 28,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    marginBottom: 16,
    color: '#202020',
    fontFamily: 'Raleway',
    lineHeight: 36,
    letterSpacing: -0.28,
  },
  subtitle: {
    fontSize: 19,
    color: '#000000',
    textAlign: 'center',
    lineHeight: 27,
    fontFamily: 'NunitoSans-Regular',
    letterSpacing: 0,
  },
  button: {
    backgroundColor: '#004CFF',

    paddingHorizontal: 73,
    borderRadius: 16,
    marginTop: 30,
  },
  buttonText: {
    color: '#F3F3F3',
    fontSize: 22,
    fontFamily: 'NunitoSans-Regular',
    letterSpacing: 0,
    lineHeight: 31,
  },
});
