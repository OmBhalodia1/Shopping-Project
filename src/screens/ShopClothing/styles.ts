import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },
  contentWrapper: {
    paddingHorizontal: 20,
  },
  scrollView: {
    flexGrow: 1,
  },
});
