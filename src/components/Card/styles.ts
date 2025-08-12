import { Dimensions, Platform, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = Math.min(width * 0.9, 350);

export const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: 650,
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
  // rest of the styles...

  cardImage: {
    width: '100%',
    height: 368,
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
  },
  textWrapper: {
    padding: 28,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
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
    fontFamily: 'nunito sans',
    fontWeight: '300',
    letterSpacing: 0,
  },
  button: {
    backgroundColor: '#004CFF',
    paddingVertical: 14,
    paddingHorizontal: 73,
    borderRadius: 16,
    marginTop: 30,
  },
  buttonText: {
    color: '#F3F3F3',
    fontSize: 22,
    fontWeight: '300',
    fontFamily: 'nunito sans',
    letterSpacing: 0,
    lineHeight: 31,
  },
});
