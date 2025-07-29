import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 0.6,
    borderColor: '#eee',
  },
  label: {
    fontSize: 16,
    flex: 1,
  },
  value: {
    color: '#222',
    marginRight: 10,
    fontSize: 16,
  },
});
