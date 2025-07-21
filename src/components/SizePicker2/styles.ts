import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  label: {
    fontSize: 28,
    color: '#222',
    fontWeight: 'bold',
    letterSpacing: 0.2,
    marginBottom: 12,
    marginTop: 0,
  },
  row: {
    flexDirection: 'row',
    gap: 3,
  },
  button: {
    width: 48,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    backgroundColor: '#F9F9F9',
    marginRight: 12,
  },

  buttonText: {
    fontSize: 14,
    color: '#101012',
    fontWeight: '400',
    letterSpacing: 1,
  },
  active: {
    backgroundColor: '#E5EBFC',
    borderWidth: 2,
    borderColor: '#004CFF',
  },
  activeText: {
    fontWeight: '600',
  },
  disabled: {
    backgroundColor: '#EAF0FF',
    borderWidth: 0,
  },
  disabledText: {
    color: '#B3B9C6',
    fontWeight: '400',
  },
});
