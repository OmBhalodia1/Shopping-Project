import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#0042E0',
    paddingHorizontal: 20,
  },
});
