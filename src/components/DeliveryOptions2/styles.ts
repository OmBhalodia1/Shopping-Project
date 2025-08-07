import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  optionRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
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
    fontWeight: '500',
    color: '#222',
    fontFamily: 'Raleway',
    minWidth: 98,
    marginRight: 6,
  },
  daysBadgeWrap: { flexDirection: 'row', marginRight: 8 },
  daysBadge: {
    color: '#0260E8',
    backgroundColor: '#F5F8FF',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 4,
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Raleway',
    overflow: 'hidden',
  },
  optionPrice: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111',
    fontFamily: 'Raleway',
    marginLeft: 'auto',
  },
  optionPriceFree: {
    color: '#111',
    fontWeight: '700',
  },
  tickContainer: {
    position: 'absolute',
    zIndex: Platform.OS === 'android' ? 2 : 0,
  },
  tickCircle: {
    width: 25,
    height: 25,
    borderRadius: 999,
    backgroundColor: '#285AFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#FFFFFF',
    borderWidth: 3,
  },
  tickText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '900',
    justifyContent: 'center',
  },
});
