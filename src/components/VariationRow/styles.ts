import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  variationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 9,
    marginBottom: 10,
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
    marginLeft: 112,
  },
  variationArrowIcon: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '900',
  },
});
