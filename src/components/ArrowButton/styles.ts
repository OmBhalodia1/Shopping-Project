import { Platform, StyleSheet, Text, View } from 'react-native';

export const styles = StyleSheet.create({
  loginRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 213,
    height: 30,
  },
  loginText: {
    color: 'black',
    fontSize: 15,
    marginRight: 8,
    fontFamily: 'Nunito Sans',
    fontWeight: '300',
  },
  arrowCircle: {
    backgroundColor: '#0F4BFF',
    borderRadius: 20,
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    bottom: Platform.OS === 'android' ? 4 : 0,
  },
});
