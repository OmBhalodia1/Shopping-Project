import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    height: 61,
  },
  contained: {
    backgroundColor: '#004CFF',
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: '#004CFF',
  },
  plain: {
    backgroundColor: '#ffffff',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '300',
    fontFamily: 'Nunito Sans',
  },
  textContained: {
    color: 'white',
  },
  textOutline: {
    color: '#004CFF',
  },
  textPlain: {
    color: '#202020',
    fontSize: 15,
    lineHeight: 26,
    letterSpacing: 0,
  },
});
