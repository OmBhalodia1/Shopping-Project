import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  innerContainer: {
    padding: 20,
  },
  pickerBox: {
    backgroundColor: '#E7EAFE',
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  pickerText: {
    fontSize: 18,
    color: '#375AFF',
    fontWeight: '400',
  },
  checkIcon: {
    width: 26,
    height: 26,
  },
  checkIconSmall: {
    width: 22,
    height: 22,
  },
  alphaHeader: {
    backgroundColor: '#F6F6FA',
    borderRadius: 10,
    marginHorizontal: 14,
    paddingVertical: 6,
    marginTop: 10,
    marginBottom: 3,
    width: 60,
    alignItems: 'center',
  },
  alphaHeaderText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#242529',
  },
  countryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 26,
    paddingVertical: 14,
    borderRadius: 10,
  },
  countryText: {
    fontSize: 18,
    color: '#222',
    fontWeight: '400',
  },
});
