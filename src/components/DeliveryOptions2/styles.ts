import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  optionRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
    marginBottom: 5,
  },
  optionRowChecked: {
    backgroundColor: '#F5F8FF',
  },
  radio: {
    width: 26,
    height: 26,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 11,
    backgroundColor: 'lightgrey',
  },

  optionLabel: {
    fontSize: 20,
    color: '#222',
    fontFamily: 'Raleway',
    minWidth: 90,
    marginRight: 6,
  },
  daysBadge: {
    color: '#0260E8',
    backgroundColor: '#fff',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 4,
    fontSize: 16,
    fontFamily: 'Raleway',
    overflow: 'hidden',
  },
  optionPrice: {
    fontSize: 20,
    color: '#111',
    fontFamily: 'Raleway',
    marginLeft: 'auto',
  },
  optionPriceFree: {
    color: '#111',
    fontFamily: 'Raleway',
  },
});
