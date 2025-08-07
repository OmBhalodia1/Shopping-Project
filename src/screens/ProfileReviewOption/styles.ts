import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#F8FAFF',
    paddingHorizontal: Platform.OS === 'android' ? 55 : 45,
    paddingVertical: 20,
    marginBottom: 20,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
  headerText: {
    fontFamily: 'Raleway',
    fontWeight: '700',
    fontSize: 20,
    letterSpacing: -0.22,
    color: '#000000',
  },
});
