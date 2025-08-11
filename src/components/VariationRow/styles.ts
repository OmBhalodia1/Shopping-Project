import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  variationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  variationLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#181818',
    marginRight: 12,
  },
  variationValueBox: {
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    marginRight: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginTop: 5,
  },
  variationValue: {
    fontSize: 15.5,
    color: '#202020',
    fontWeight: '600',
  },
  variationArrow: {
    backgroundColor: '#0958FD',
    borderRadius: 20,
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: Platform.OS === 'android' ? 135 : 112,
  },
  variationArrowIcon: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '900',
    bottom: Platform.OS === 'android' ? 4 : 0,
  },
});
