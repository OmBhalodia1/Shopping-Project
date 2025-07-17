import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    width: 48,
    borderRadius: 24,
  },
  icon: {
    width: 23,
    height: 23,
    resizeMode: 'contain',
    marginTop: 10,
  },
  underline: {
    position: 'absolute',
    bottom: 0,
    height: 3,
    width: 20,
    borderRadius: 2,
    backgroundColor: '#000000',
  },
});
