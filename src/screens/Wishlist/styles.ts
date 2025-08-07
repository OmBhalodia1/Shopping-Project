import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'android' ? 20 : 20,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  arrowButton: {
    marginLeft: 'auto',
    bottom: 20,
  },
});
