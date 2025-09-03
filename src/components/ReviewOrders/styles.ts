import { Platform, StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#FFFFFF',
  },
  imageShadow: {
    shadowColor: '#000',
    shadowOpacity: 0.1608,
    shadowOffset: { width: 0, height: 4 },
  },
  image: {
    width: Platform.OS === 'android' ? 110 : 100,
    height: Platform.OS === 'android' ? 110 : 100,
    borderRadius: 12,
    marginRight: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 4,
    borderColor: '#FFFFFF',
    elevation: 4,
  },
  infoSection: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
  },
  description: {
    color: '#000000',
    fontSize: 15,
    marginBottom: 5,
  },

  bold: {
    fontWeight: '700',
    fontSize: 15,
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  date: {
    backgroundColor: '#EDEDED',
    color: '#000000',
    fontSize: 15,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
    fontWeight: '500',
  },
  button: {
    height: 36,
    borderRadius: 10,
    marginHorizontal: 10,
    paddingHorizontal: 20,
  },
});
