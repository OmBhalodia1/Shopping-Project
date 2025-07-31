import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 21,
    fontWeight: '700',
    fontFamily: 'Raleway',
    lineHeight: 30,
    letterSpacing: -0.21,
  },
  seeAllBtn: { flexDirection: 'row', alignItems: 'center' },
  seeAllText: {
    fontSize: 16,
    color: '#222',
    marginRight: 10,
    fontWeight: '600',
  },
  arrowCircle: {
    backgroundColor: '#0F4BFF',
    borderRadius: 20,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  arrow: {
    color: '#ffffff',
    fontSize: 19,
    bottom: Platform.OS === 'android' ? 4 : 0,
  },
});
