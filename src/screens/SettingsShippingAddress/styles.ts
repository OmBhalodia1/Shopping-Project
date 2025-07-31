import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },
  innerContainer: {
    padding: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: '400',
    color: '#000',
    marginVertical: 10,
  },
  input: {
    backgroundColor: '#F1F4FE',
    borderRadius: 9,
    padding: 12,
    fontSize: 16,
    color: '#000',
    marginBottom: 4,
  },
});
