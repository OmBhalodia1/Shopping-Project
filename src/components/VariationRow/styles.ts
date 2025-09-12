import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  variationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  variationLabel: {
    fontSize: 20,
    fontFamily: 'Raleway',
    color: '#181818',
    marginRight: 12,
  },
  variationValueBox: {
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    marginRight: 8,
    paddingHorizontal: 12,
    paddingVertical: 3,
  },
  variationValue: {
    fontSize: 15.5,
    color: '#202020',
    fontFamily: 'Raleway',
  },

  variationArrowIcon: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '900',
    bottom: Platform.OS === 'android' ? 4 : 0,
  },
});
