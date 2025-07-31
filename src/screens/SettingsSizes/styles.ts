import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },
  innerContainer: { paddingHorizontal: 20, paddingTop: 10 },
  title1: { fontSize: 32, fontWeight: '700', marginBottom: 10 },
  title2: { fontSize: 20, fontWeight: '400' },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    borderRadius: 14,
    height: 58,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  optionActive: {
    backgroundColor: '#EEF2FF',
  },
  optionText: {
    fontSize: 18,
    color: '#222',
  },

  radioOuter: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FBEAEC',
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
});
