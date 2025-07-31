import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  colorList: {
    flexDirection: 'row',
    gap: 15,
    padding: 4,
  },
  colorButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  colorCircle: {
    width: 35,
    height: 35,
    borderRadius: 18,
    borderWidth: 4,
    borderColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOpacity: 0.16,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
  },
  colorSelected: {
    borderWidth: 1,
    borderColor: '#285AFF',
    borderRadius: 20,
  },
  tickContainer: {
    position: 'absolute',
    top: -4,
    right: -4,
    zIndex: Platform.OS === 'android' ? 2 : 0,
  },
  tickCircle: {
    width: 20,
    height: 20,
    borderRadius: 15,
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
